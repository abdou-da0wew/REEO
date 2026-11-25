import { fitGhost, setGhost, toggleGhost } from '../ghosts';
import { markCompleted } from './actions';
import { buildExample, showHelpToast } from './build';
import { button, node, text } from './dom';
import { labels } from './labels';
import { state } from './state';

export function renderDock() {
  state.dock.replaceChildren();
  const recipe = state.activeRecipe;
  const activeStep = recipe?.steps[state.step];
  if (!recipe || !activeStep) return;
  state.dock.dataset.recipe = recipe.id;
  state.dock.append(
    node('strong', `${text(recipe.title)} · ${state.step + 1}/${recipe.steps.length}`),
    node('p', text(activeStep)),
    node('p', text(labels.blueprintHint), 'reeo-guide-hint'),
  );
  const progress = document.createElement('progress');
  progress.className = 'reeo-guide-progress';
  progress.max = recipe.steps.length;
  progress.value = state.step + 1;
  progress.setAttribute(
    'aria-label',
    `${text(recipe.title)}: ${state.step + 1} / ${recipe.steps.length}`,
  );
  state.dock.append(progress);
  const ghost = button(['Hide ghost', 'إخفاء المخطط', 'اخفي الرسم'], () => {
    const visible = toggleGhost();
    ghost.textContent = text(
      visible
        ? ['Hide ghost', 'إخفاء المخطط', 'اخفي الرسم']
        : ['Show ghost', 'إظهار المخطط', 'ورّي الرسم'],
    );
  });
  const tools = node('div', undefined, 'reeo-guide-tools');
  tools.append(ghost, button(['Fit guide', 'احتواء المخطط', 'اعرض الرسم كله'], fitGhost));
  if (recipe.program) {
    const build = button(labels.buildExample, () => buildExample(recipe.program!));
    build.title = text(labels.buildNote);
    tools.append(build);
  }
  state.dock.append(tools);
  if (recipe.program) state.dock.append(node('p', text(labels.buildNote), 'reeo-guide-hint'));
  const actions = node('div');
  const previous = button(labels.previous, () => {
    state.step--;
    renderDock();
  });
  previous.disabled = state.step === 0;
  actions.append(
    previous,
    button(state.step === recipe.steps.length - 1 ? labels.finish : labels.next, () => {
      if (state.step === recipe.steps.length - 1) {
        markCompleted(recipe);
        showHelpToast(text(labels.finishedTitle), text(labels.finishedBody));
        state.dock.hidden = true;
        setGhost(undefined);
      } else {
        state.step++;
        renderDock();
      }
    }),
    button(labels.close, () => {
      state.dock.hidden = true;
      setGhost(undefined);
    }),
  );
  state.dock.append(actions);
}
