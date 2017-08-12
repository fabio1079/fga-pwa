import initialState , { CurrentPathState } from '../state';
import { Action } from '../actions-types';

function currentPathReducer(state: CurrentPathState, action: Action): CurrentPathState {
  if (!state) {
    return initialState.currentPath;
  }

  switch (action.type) {
    case 'SET_CURRENT_PATH':
      return action.payload;

    default:
      return state;
  }
}

export default currentPathReducer;