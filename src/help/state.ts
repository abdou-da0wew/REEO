import type { Course, Recipe } from '../help-content';

export type Tab = 'start' | 'components' | 'courses' | 'recipes' | 'projects' | 'check';

export const state: {
  backdrop: HTMLElement;
  panel: HTMLElement;
  results: HTMLElement;
  search: HTMLInputElement;
  tabs: HTMLElement;
  dock: HTMLElement;
  current: Tab;
  query: string;
  lastFocus: HTMLElement | null;
  activeRecipe: Recipe | undefined;
  activeCourse: Course | undefined;
  completed: Set<string>;
  step: number;
  tipsEnabled: boolean;
  open?: (component?: string) => void;
  close?: () => void;
} = {
  backdrop: null as unknown as HTMLElement,
  panel: null as unknown as HTMLElement,
  results: null as unknown as HTMLElement,
  search: null as unknown as HTMLInputElement,
  tabs: null as unknown as HTMLElement,
  dock: null as unknown as HTMLElement,
  current: 'start',
  query: '',
  lastFocus: null,
  activeRecipe: undefined,
  activeCourse: undefined,
  completed: new Set<string>(),
  step: 0,
  tipsEnabled: true,
};
