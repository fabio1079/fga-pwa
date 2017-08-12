import initialState, { TemporaryTestState } from '../state';
import { Action } from '../actions-types';

function temporaryTestStateReducer(state: TemporaryTestState, action: Action): TemporaryTestState {
  if (!state) {
    return initialState.temporaryTestState;
  }

  switch (action.type) {
    case 'SET_TEMP_TEST_SOME_VALUE':
      return {
        ...state,
        someTestValue: action.payload
      };

    default:
      return state;
  }
}

export default temporaryTestStateReducer;