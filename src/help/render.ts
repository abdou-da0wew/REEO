import { checkCircuit } from '../diagnostics';
import type { CheckComponent, CheckWire } from '../diagnostics';
import { circuitSVG } from '../icons';
import {
  basics,
  componentGuides,
  courses,
  exampleProjects,
  quickStart,
  recipes,
} from '../help-content';
import type { ComponentGuide, Course, ExampleProject, Level, Recipe } from '../help-content';
import { buildExample } from './build';
import { button, field, node, text } from './dom';
import { focusPart, isCompleted, startCourse, startRecipe } from './actions';
import { labels } from './labels';
import { state } from './state';

declare const components: (CheckComponent & { pos: { x: number; y: number }; outline?: number })[];
declare const wires: CheckWire[];
declare const pauseSimulation: boolean;
declare const simulationSaturated: boolean;

const LEVEL_LABELS: Record<Level, keyof typeof labels> = {
  beginner: 'levelBeginner',
  intermediate: 'levelIntermediate',
  advanced: 'levelAdvanced',
};

function levelBadge(level: Level): HTMLElement {
  const badge = node('span', text(labels[LEVEL_LABELS[level]]), 'reeo-help-level');
  badge.dataset.level = level;
  return badge;
}

function completedBadge(): HTMLElement {
  const badge = node('span', text(labels.completed), 'reeo-help-completed');
  badge.dataset.done = 'true';
  return badge;
}

function partName(id: string): string {
  const guide = componentGuides.find((item) => item.id === id);
  return guide ? text(guide.title) : id;
}

function partLine(ids: readonly string[]): HTMLElement {
  const line = node('p', `${text(labels.need)}: `, 'reeo-help-parts');
  const list = node('span');
  for (const [index, id] of ids.entries()) {
    if (index) list.append(', ');
    list.append(node('strong', partName(id)));
  }
  line.append(list);
  return line;
}

function componentCard(item: ComponentGuide): HTMLElement {
  const card = node('article', undefined, 'reeo-help-card');
  const heading = node('h3', `${text(item.title)} · ${item.id}`);
  const icon = node('span');
  icon.innerHTML = circuitSVG(item.id);
  heading.prepend(icon);
  card.append(
    heading,
    field(labels.behavior, item.behavior),
    field(labels.wiring, item.wiring),
    field(labels.example, item.example),
    field(labels.caution, item.caution),
  );
  const related = recipes.filter((recipe) => recipe.parts?.includes(item.id)).slice(0, 3);
  if (related.length) {
    card.append(node('h4', text(labels.tryRecipe)));
    const links = node('div', undefined, 'reeo-help-actions');
    for (const recipe of related) links.append(button(recipe.title, () => startRecipe(recipe)));
    card.append(links);
  }
  return card;
}

function recipeCard(item: Recipe): HTMLElement {
  const card = node('article', undefined, 'reeo-help-card');
  const heading = node('h3');
  heading.append(node('span', text(item.title)), levelBadge(item.level));
  if (isCompleted(item.id)) heading.append(completedBadge());
  card.append(heading);
  if (item.summary) card.append(field(labels.goal, item.summary));
  if (item.parts?.length) card.append(partLine(item.parts));
  const list = node('ol');
  for (const copy of item.steps) list.append(node('li', text(copy)));
  card.append(list);
  if (item.check) card.append(field(labels.troubleshoot, item.check));
  card.append(field(labels.expected, item.expected));
  const actions = node('div', undefined, 'reeo-help-actions');
  actions.append(button(labels.pin, () => startRecipe(item)));
  if (item.program) {
    actions.append(
      button(labels.buildExample, () => {
        buildExample(item.program!);
      }),
    );
  }
  card.append(actions);
  if (item.program) card.append(node('p', text(labels.buildNote), 'reeo-help-note'));
  return card;
}

function projectCard(item: ExampleProject): HTMLElement {
  const card = node('article', undefined, 'reeo-help-card');
  const heading = node('h3');
  heading.append(node('span', text(item.title)), levelBadge(item.level));
  card.append(heading, node('p', text(item.summary)), field(labels.goal, item.goal));
  card.append(partLine(item.parts));
  const list = node('ol');
  for (const copy of item.steps) list.append(node('li', text(copy)));
  card.append(list, field(labels.expected, item.expected));
  const actions = node('div', undefined, 'reeo-help-actions');
  actions.append(
    button(labels.buildProject, () => {
      buildExample(item.program);
    }),
  );
  card.append(actions, node('p', text(labels.buildNote), 'reeo-help-note'));
  return card;
}

function courseCard(course: Course): HTMLElement {
  const card = node('article', undefined, 'reeo-help-card');
  const heading = node('h3');
  heading.append(node('span', text(course.title)), levelBadge(course.level));
  card.append(heading, field(labels.goal, course.summary), field(labels.outcome, course.outcome));
  const list = node('ol');
  for (const id of course.recipeIds) {
    const recipe = recipes.find((item) => item.id === id);
    if (!recipe) continue;
    const row = node('li');
    row.append(node('span', text(recipe.title)));
    if (isCompleted(recipe.id)) row.append(completedBadge());
    list.append(row);
  }
  card.append(list);
  const done = course.recipeIds.filter((id) => isCompleted(id)).length;
  card.append(
    node(
      'p',
      `${done} / ${course.recipeIds.length} ${text(labels.courseProgress)}`,
      'reeo-help-progress',
    ),
  );
  const actions = node('div', undefined, 'reeo-help-actions');
  actions.append(
    button(done ? labels.continueCourse : labels.startCourse, () => startCourse(course, recipes)),
  );
  card.append(actions);
  return card;
}

export function render() {
  if (!state.results) return;
  state.results.replaceChildren();
  state.tabs.replaceChildren();
  for (const key of ['start', 'components', 'courses', 'recipes', 'projects', 'check'] as const) {
    const tab = button(labels[key], () => {
      state.current = key;
      state.query = '';
      state.search.value = '';
      render();
    });
    tab.setAttribute('aria-pressed', String(state.current === key));
    state.tabs.append(tab);
  }
  if (state.current === 'start' && !state.query.trim()) {
    state.results.append(node('p', text(labels.intro)));
    state.results.append(node('h3', text(labels.quickStart), 'reeo-help-section-title'));
    const quick = node('ol');
    for (const copy of quickStart) quick.append(node('li', text(copy)));
    state.results.append(quick);
    state.results.append(node('h3', text(labels.goodHabits), 'reeo-help-section-title'));
    const list = node('ol');
    for (const copy of basics) list.append(node('li', text(copy)));
    const actions = node('div', undefined, 'reeo-help-actions');
    actions.append(
      button(labels.browseCourses, () => {
        state.current = 'courses';
        render();
      }),
      button(labels.browseRecipes, () => {
        state.current = 'recipes';
        render();
      }),
    );
    state.results.append(list, actions);
    return;
  }
  if (state.current === 'start' && state.query.trim()) {
    const query = state.query.toLowerCase();
    let matches = 0;
    const section = (title: keyof typeof labels, cards: HTMLElement[]) => {
      if (!cards.length) return;
      if (!matches) state.results.replaceChildren();
      matches += cards.length;
      state.results.append(node('h3', text(labels[title]), 'reeo-help-section-title'), ...cards);
    };
    section(
      'components',
      componentGuides
        .filter((item) =>
          `${item.id} ${text(item.title)} ${text(item.behavior)} ${text(item.wiring)}`
            .toLowerCase()
            .includes(query),
        )
        .map(componentCard),
    );
    section(
      'courses',
      courses
        .filter((item) =>
          `${text(item.title)} ${text(item.summary)} ${text(item.outcome)}`
            .toLowerCase()
            .includes(query),
        )
        .map(courseCard),
    );
    section(
      'recipes',
      recipes
        .filter((item) =>
          `${text(item.title)} ${text(item.summary ?? item.expected)} ${item.steps.map(text).join(' ')}`
            .toLowerCase()
            .includes(query),
        )
        .map(recipeCard),
    );
    section(
      'projects',
      exampleProjects
        .filter((item) =>
          `${text(item.title)} ${text(item.summary)} ${text(item.goal)} ${item.steps.map(text).join(' ')}`
            .toLowerCase()
            .includes(query),
        )
        .map(projectCard),
    );
    if (!matches) state.results.append(node('p', text(labels.noResults)));
    return;
  }
  if (state.current === 'components') {
    const exact = componentGuides.find(
      (item) => item.id.toLowerCase() === state.query.trim().toLowerCase(),
    );
    const items = exact
      ? [exact]
      : componentGuides.filter((item) =>
          `${item.id} ${text(item.title)} ${text(item.behavior)} ${text(item.example)}`
            .toLowerCase()
            .includes(state.query.toLowerCase()),
        );
    for (const item of items) state.results.append(componentCard(item));
    if (!items.length) state.results.append(node('p', text(labels.noResults)));
    return;
  }
  if (state.current === 'courses') {
    const items = courses.filter((item) =>
      `${item.id} ${text(item.title)} ${text(item.summary)} ${text(item.outcome)}`
        .toLowerCase()
        .includes(state.query.toLowerCase()),
    );
    for (const item of items) state.results.append(courseCard(item));
    if (!items.length) state.results.append(node('p', text(labels.noResults)));
    return;
  }
  if (state.current === 'recipes') {
    const items = recipes.filter((item) =>
      `${item.id} ${text(item.title)} ${text(item.summary ?? item.expected)} ${item.steps.map(text).join(' ')}`
        .toLowerCase()
        .includes(state.query.toLowerCase()),
    );
    for (const item of items) state.results.append(recipeCard(item));
    if (!items.length) state.results.append(node('p', text(labels.noResults)));
    return;
  }
  if (state.current === 'projects') {
    const items = exampleProjects.filter((item) =>
      `${item.id} ${text(item.title)} ${text(item.summary)} ${text(item.goal)} ${item.steps.map(text).join(' ')}`
        .toLowerCase()
        .includes(state.query.toLowerCase()),
    );
    for (const item of items) state.results.append(projectCard(item));
    if (!items.length) state.results.append(node('p', text(labels.noResults)));
    return;
  }
  state.results.append(node('p', text(labels.scope)), button(labels.refresh, render));
  const findings = checkCircuit(components, wires, pauseSimulation, simulationSaturated);
  if (!findings.length) state.results.append(node('p', text(labels.noIssues)));
  for (const finding of findings) {
    const card = node('article', undefined, 'reeo-help-card');
    const part = components.find((p) => p.id === finding.componentId);
    card.append(
      node('h3', part?.name ?? text(labels.tip)),
      node('p', text(finding.message)),
      node('p', text(finding.fix)),
      button(labels.learn, () => state.open?.(finding.type)),
    );
    const id = finding.componentId;
    if (id !== undefined) card.append(button(labels.locate, () => focusPart(id)));
    state.results.append(card);
  }
}
