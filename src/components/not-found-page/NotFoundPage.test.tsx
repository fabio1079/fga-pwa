import * as React from 'react';

import { shallow } from 'enzyme';

import NotFoundPage from './NotFoundPage';

describe('NotFoundPage component', () => {
  const props = {
    setCurrentPage(page: string) { }
  }

  const wrapper = shallow(<NotFoundPage {...props} />);

  it('Renders without breaking', () => {
    expect(
      wrapper.contains(<h1>Ops, página não encontrada...</h1>)
    ).toBe(true);
  })
});