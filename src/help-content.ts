export type { Copy, ComponentGuide, Course, ExampleProject, Level, Recipe } from './help/types';
import { sourceGuides } from './help/sources-and-indicators';
import { displayGuides } from './help/displays-and-controls';
import { outputGuides } from './help/outputs-and-bus';
import { recipes } from './help/recipes';
import { courses } from './help/courses';
import { exampleProjects } from './help/projects';
import { basics, quickStart } from './help/basics';
import type { ComponentGuide } from './help/types';

export const componentGuides: readonly ComponentGuide[] = [
  ...sourceGuides,
  ...displayGuides,
  ...outputGuides,
];
export { recipes, courses, exampleProjects, basics, quickStart };
