import type { Course, Recipe } from '../help-content';
import { renderDock } from './dock';
import { fitGhost, setGhost } from '../ghosts';
import { state } from './state';

declare const components: {
  id: number | string;
  pos: { x: number; y: number };
  outline?: number;
}[];
declare let offset: { x: number; y: number };
declare const zoom: number;

export function focusPart(id: number | string) {
  const part = components.find((p) => p.id === id);
  if (!part) return;
  offset.x = part.pos.x - innerWidth / (2 * zoom);
  offset.y = part.pos.y + innerHeight / (2 * zoom);
  part.outline = 1;
  setTimeout(() => (part.outline = 0), 2000);
  state.close?.();
}

const COMPLETED_KEY = 'reeo.completedGuides.v1';

export function loadCompleted(): void {
  try {
    const saved = JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]');
    if (Array.isArray(saved)) {
      state.completed = new Set(saved.filter((id): id is string => typeof id === 'string'));
    }
  } catch {
    /* private mode or malformed data: start with an empty progress list */
  }
}

export function markCompleted(recipe: Recipe): void {
  state.completed.add(recipe.id);
  try {
    localStorage.setItem(COMPLETED_KEY, JSON.stringify([...state.completed]));
  } catch {
    /* progress is still visible for this session */
  }
}

export function isCompleted(id: string): boolean {
  return state.completed.has(id);
}

export function startRecipe(recipe: Recipe, course?: Course): void {
  state.activeRecipe = recipe;
  state.activeCourse = course;
  setGhost(recipe.id);
  state.step = 0;
  renderDock();
  state.close?.();
  state.dock.hidden = false;
  fitGhost();
}

export function startCourse(course: Course, recipes: readonly Recipe[]): void {
  const path = course.recipeIds
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter((recipe): recipe is Recipe => Boolean(recipe));
  const first = path.find((recipe) => !isCompleted(recipe.id)) ?? path[0];
  if (first) startRecipe(first, course);
}
