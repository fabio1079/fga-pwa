import * as React from 'react';

import { shallow } from 'enzyme';

import store from '../../redux-data/store';
import MainMenuContainer from './MainMenuContainer';

describe('MainMenuContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<MainMenuContainer />, { context });

  it('Uses HomePage', () => {
    expect(wrapper.dive().prop('className')).toEqual('MainMenu');
  });

  it('Pass currentPath to its mounted component', () => {
    expect(wrapper.prop('currentPath')).toEqual('/');
  });
});