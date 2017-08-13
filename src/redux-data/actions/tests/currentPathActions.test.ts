import { setCurrentPath } from '../currentPathActions';
import{ CurrentPathAction } from '../../actions-types';


describe('currentPathActions actions', () => {
  it('setCurrentPath returns a valid CurrentPathAction', () => {
    let action: CurrentPathAction = setCurrentPath('/news');

    expect(action.type).toEqual('SET_CURRENT_PATH');
    expect(action.payload).toEqual('/news');
  });
});