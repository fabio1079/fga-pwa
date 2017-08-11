import * as React from 'react';

import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);

  expect(
    wrapper.contains(<h2>Welcome to React</h2>)
  ).toBe(true);
});
