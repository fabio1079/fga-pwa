import * as React from 'react';

import { shallow } from 'enzyme';

import { State } from '../../redux-data/state';
import store from '../../redux-data/store';
import ContactPageContainer from './ContactPageContainer';

describe('ContactPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<ContactPageContainer />, { context });

  it('Uses ContactPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('ContactPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });

  it('setCurrentPage alters the currentPath: on the store', () => {
    let state: State = store.getState() as State;

    const setCurrentPage: (page:string) => void
      = wrapper.prop('setCurrentPage');

    const oldCurrentPath = state.currentPath;
    setCurrentPage("/contact");

    state = store.getState() as State;
    const newCurrentPath = state.currentPath;

    expect(oldCurrentPath).not.toEqual(newCurrentPath);
    expect(newCurrentPath).toEqual("/contact");
  });
});