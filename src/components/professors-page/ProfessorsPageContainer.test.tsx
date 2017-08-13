import * as React from 'react';

import { shallow } from 'enzyme';

import { State } from '../../redux-data/state';
import store from '../../redux-data/store';
import ProfessorsPageContainer from './ProfessorsPageContainer';

describe('ProfessorsPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<ProfessorsPageContainer />, { context });

  it('Uses ProfessorsPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('ProfessorsPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });

  it('setCurrentPage alters the currentPath: on the store', () => {
    let state: State = store.getState() as State;

    const setCurrentPage: (page:string) => void
      = wrapper.prop('setCurrentPage');

    const oldCurrentPath = state.currentPath;
    setCurrentPage("/professors");

    state = store.getState() as State;
    const newCurrentPath = state.currentPath;

    expect(oldCurrentPath).not.toEqual(newCurrentPath);
    expect(newCurrentPath).toEqual("/professors");
  });
});