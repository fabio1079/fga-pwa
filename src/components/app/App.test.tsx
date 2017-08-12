import * as React from 'react';

import { shallow } from 'enzyme';

import App from './App';
import MainMenu from '../main-menu/MainMenu';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('Has a main menu component', () => {
    expect(
      wrapper.find(MainMenu)
    ).toHaveLength(1)
  })
})
