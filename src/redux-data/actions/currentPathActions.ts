import { CurrentPathAction } from '../actions-types';

export function setCurrentPath(page: string): CurrentPathAction {
  return {
    type: 'SET_CURRENT_PATH',
    payload: page
  };
}
