import * as React from 'react';

import { shallow } from 'enzyme';

import { State } from '../../redux-data/state';
import store from '../../redux-data/store';
import NotFoundPageContainer from './NotFoundPageContainer';


describe('NotFoundPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<NotFoundPageContainer />, { context });

  it('Uses NotFoundPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('NotFoundPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });

  it('setCurrentPage alters the currentPath: on the store', () => {
    let state: State = store.getState() as State;

    const setCurrentPage: (page:string) => void
      = wrapper.prop('setCurrentPage');

    const oldCurrentPath = state.currentPath;
    setCurrentPage("/some-unknown-page");

    state = store.getState() as State;
    const newCurrentPath = state.currentPath;

    expect(oldCurrentPath).not.toEqual(newCurrentPath);
    expect(newCurrentPath).toEqual("/some-unknown-page");
  });
});