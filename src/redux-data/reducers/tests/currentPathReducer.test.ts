import currentPathReducer from '../currentPathReducer';
import initialState from '../../state';

import { setCurrentPath } from '../../actions/currentPathActions';

describe('currentPathReducer reducer', () => {
  it('Set the current path on the given state', () => {
    let state = initialState;
    let action = setCurrentPath('/news');

    expect(state.currentPath).toEqual('/');

    state.currentPath = currentPathReducer(state.currentPath, action);

    expect(state.currentPath).toEqual('/news');
  });
});