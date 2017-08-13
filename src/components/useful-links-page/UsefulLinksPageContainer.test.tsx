import * as React from 'react';

import { shallow } from 'enzyme';

import { State } from '../../redux-data/state';
import store from '../../redux-data/store';
import UsefulLinksPageContainer from './UsefulLinksPageContainer';

describe('UsefulLinksPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<UsefulLinksPageContainer />, { context });

  it('Uses UsefulLinksPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('UsefulLinksPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });

  it('setCurrentPage alters the currentPath: on the store', () => {
    let state: State = store.getState() as State;

    const setCurrentPage: (page:string) => void
      = wrapper.prop('setCurrentPage');

    const oldCurrentPath = state.currentPath;
    setCurrentPage("/links");

    state = store.getState() as State;
    const newCurrentPath = state.currentPath;

    expect(oldCurrentPath).not.toEqual(newCurrentPath);
    expect(newCurrentPath).toEqual("/links");
  });
});