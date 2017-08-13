import * as React from 'react';

import { shallow } from 'enzyme';

import App from './App';
import MainMenuContainer from '../main-menu/MainMenuContainer';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('Has a main menu component', () => {
    expect(
      wrapper.find(MainMenuContainer)
    ).toHaveLength(1)
  })
})
