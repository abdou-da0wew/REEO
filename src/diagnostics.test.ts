import { test, expect } from 'bun:test';
import { checkCircuit } from './diagnostics';
import type { CheckComponent, CheckWire } from './diagnostics';
import {
  basics,
  componentGuides,
  courses,
  exampleProjects,
  quickStart,
  recipes,
} from './help-content';
import { compileCircuit } from './circuit-dsl';
const part = (name: string, id = 1): CheckComponent => ({
  id,
  constructor: { name },
  input: [],
  output: [],
  properties: {},
});
test('every exposed component has complete localized reference content', () => {
  expect(componentGuides.map((g) => g.id).sort()).toEqual(
    [
      'Input',
      'Output',
      'Button',
      'Constant',
      'NOT',
      'AND',
      'OR',
      'XOR',
      'Clock',
      'Delay',
      'Counter',
      'LED',
      'Display',
      'ROM',
      'Debug',
      'Beep',
      'TimerStart',
      'TimerEnd',
      'Custom',
      'Buzzer',
      'Tone',
      'DipSwitch',
      'Slider',
      'RGBLed',
      'BarGraph',
      'SevenSegment',
      'Lamp',
      'Motor',
      'Splitter',
      'Merger',
      'Procedural',
    ].sort(),
  );
  for (const guide of componentGuides)
    for (const field of [guide.title, guide.behavior, guide.wiring, guide.example, guide.caution]) {
      expect(field).toHaveLength(3);
      expect(field.every((text) => text.length > 0)).toBe(true);
      expect(field.slice(1).every((text) => /[\u0600-\u06ff]/.test(text))).toBe(true);
    }
  for (const recipe of recipes) {
    expect(recipe.steps.length).toBeGreaterThanOrEqual(3);
    for (const copy of [...recipe.steps, recipe.expected])
      expect(copy.every((text) => text.length > 0)).toBe(true);
  }
  expect(basics.length).toBeGreaterThanOrEqual(6);
  expect(quickStart.length).toBeGreaterThanOrEqual(4);
});
test('every example project and recipe program compiles to a wired board', () => {
  const ids = new Set<string>();
  for (const recipe of recipes) {
    expect(ids.has(recipe.id)).toBe(false);
    ids.add(recipe.id);
    expect(['beginner', 'intermediate', 'advanced']).toContain(recipe.level);
    if (!recipe.program) continue;
    const program = compileCircuit(recipe.program);
    expect({ id: recipe.id, errors: program.errors }).toEqual({ id: recipe.id, errors: [] });
    expect(program.components.length).toBeGreaterThan(0);
    expect(program.wires.length).toBeGreaterThan(0);
    for (const part of recipe.parts ?? []) {
      expect(componentGuides.some((guide) => guide.id === part)).toBe(true);
    }
  }
  const projectIds = new Set<string>();
  for (const project of exampleProjects) {
    expect(projectIds.has(project.id)).toBe(false);
    projectIds.add(project.id);
    expect(project.steps.length).toBeGreaterThanOrEqual(2);
    const program = compileCircuit(project.program);
    expect({ id: project.id, errors: program.errors }).toEqual({ id: project.id, errors: [] });
    expect(program.components.length).toBeGreaterThan(0);
    expect(program.wires.length).toBeGreaterThan(0);
    for (const part of project.parts) {
      expect(componentGuides.some((guide) => guide.id === part)).toBe(true);
    }
    for (const copy of [project.title, project.summary, project.goal, project.expected]) {
      expect(copy).toHaveLength(3);
      expect(copy.every((text) => text.length > 0)).toBe(true);
      expect(copy.slice(1).every((text) => /[\u0600-\u06ff]/.test(text))).toBe(true);
    }
  }
});
test('courses are ordered paths through real recipes', () => {
  const recipeIds = new Set(recipes.map((recipe) => recipe.id));
  expect(courses.length).toBeGreaterThanOrEqual(4);
  const seen = new Set<string>();
  for (const course of courses) {
    expect(course.recipeIds.length).toBeGreaterThanOrEqual(3);
    for (const id of course.recipeIds) {
      expect(recipeIds.has(id)).toBe(true);
      seen.add(id);
    }
  }
  expect(seen.size).toBe(recipes.length);
});
test('unconnected input is advisory, not declared logically incorrect', () => {
  const gate = part('AND');
  gate.input = [{}, {}];
  const findings = checkCircuit([gate], []);
  expect(findings[0]?.id).toBe('1:input');
  expect(findings[0]?.message[0]).toContain('intentional');
});
test('valid timing does not produce a timing warning', () => {
  const clock = part('Clock');
  clock.properties = { delay: 500 };
  expect(checkCircuit([clock], [])).toEqual([]);
  clock.properties.delay = 0;
  expect(checkCircuit([clock], [])[0]?.id).toBe('1:timing');
});
test('ROM and empty custom interfaces receive actionable guidance', () => {
  expect(checkCircuit([part('ROM'), part('Custom', 2)], []).map((f) => f.id)).toEqual([
    '1:rom',
    '2:custom',
  ]);
});
test('multi-driver nets are identified; fan-out is not a multi-driver net', () => {
  const from = {};
  const trunk: CheckWire = { from, input: [], output: [] };
  const branch: CheckWire = { to: {}, input: [trunk], output: [] };
  trunk.output = [branch];
  expect(checkCircuit([], [trunk, branch]).some((f) => f.id === 'drivers')).toBe(false);
  branch.input.push({ from: {}, input: [], output: [] });
  expect(checkCircuit([], [trunk, branch]).some((f) => f.id === 'drivers')).toBe(true);
});
test('cyclic wire graphs terminate; loops are not automatically called errors', () => {
  const wire: CheckWire = { to: {}, input: [], output: [] };
  wire.input = [wire];
  wire.output = [wire];
  expect(checkCircuit([], [wire])).toEqual([]);
});
test('paused and saturated simulations explain limits without asserting intent', () => {
  const p = part('Input');
  expect(checkCircuit([p], [], true).map((f) => f.id)).toEqual(['paused']);
  expect(checkCircuit([p], [], false, true)[0]?.message[0]).toContain('not necessarily');
});
