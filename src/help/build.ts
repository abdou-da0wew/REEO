import { compileCircuit } from '../circuit-dsl';
import { buildProgram } from '../program';
import { setGhost } from '../ghosts';
import { state } from './state';

export function showHelpToast(titleText: string, message: string): void {
  const stack = document.getElementById('reeo-toast-stack');
  if (!stack) return;
  const toast = document.createElement('div');
  toast.className = 'tip reeo-smart-tip';
  toast.style.display = 'block';
  toast.style.opacity = '1';
  toast.setAttribute('data-no-i18n', '');
  const title = document.createElement('strong');
  title.textContent = titleText;
  const body = document.createElement('p');
  body.textContent = message;
  toast.append(title, body);
  stack.append(toast);
  setTimeout(() => toast.remove(), 9000);
}

/**
 * Compile a guide project with the same board-code language as the editor,
 * then replace the board with the result. Returns false and leaves the guide
 * open if anything is wrong, so a broken example can never erase work silently.
 */
export function buildExample(program: string): boolean {
  const compiled = compileCircuit(program);
  if (compiled.errors.length) {
    showHelpToast(
      'Example could not be built',
      compiled.errors.map((error) => `Line ${error.line}: ${error.message}`).join(' · '),
    );
    return false;
  }
  try {
    buildProgram(compiled);
  } catch (error) {
    showHelpToast('Example could not be built', (error as Error).message);
    return false;
  }
  state.dock.hidden = true;
  setGhost(undefined);
  state.close?.();
  return true;
}
