import * as React from 'react';

import { shallow } from 'enzyme';

import HomePage from '../home-page/HomePage';

describe('HomePage component', () => {
  const props = {
    setCurrentPage(page: string) { }
  }

  const wrapper = shallow(<HomePage {...props} />);

  it('Renders without breaking', () => {
    expect(
      wrapper.contains(<h1>Home Page</h1>)
    ).toBe(true);
  })
});