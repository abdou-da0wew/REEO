export type Copy = readonly [en: string, ar: string, arz: string];
export type Level = 'beginner' | 'intermediate' | 'advanced';
export interface ComponentGuide {
  id: string;
  title: Copy;
  behavior: Copy;
  wiring: Copy;
  example: Copy;
  caution: Copy;
}
export interface Recipe {
  id: string;
  title: Copy;
  /** Short, plain-language goal shown before the steps. */
  summary?: Copy;
  level: Level;
  /** Component constructor names used by the circuit, such as AND or LED. */
  parts?: readonly string[];
  steps: readonly Copy[];
  expected: Copy;
  /** What to check when the result does not match `expected`. */
  check?: Copy;
  /** Board-code source that builds a working copy of this circuit. */
  program?: string;
}
export interface Course {
  id: string;
  title: Copy;
  level: Level;
  summary: Copy;
  outcome: Copy;
  recipeIds: readonly string[];
}
export interface ExampleProject {
  id: string;
  title: Copy;
  level: Level;
  summary: Copy;
  goal: Copy;
  parts: readonly string[];
  steps: readonly Copy[];
  expected: Copy;
  /** Board-code source. It must compile without errors. */
  program: string;
}
