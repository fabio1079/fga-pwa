import * as React from 'react';

import { shallow } from 'enzyme';

import ProfessorsPage from '../professors-page/ProfessorsPage';

describe('ProfessorsPage component', () => {
  const props = {
    setCurrentPage: (page: string) => {}
  }

  const wrapper = shallow(<ProfessorsPage {...props} />);

  it('Renders without breaking', () => {
    expect(
      wrapper.contains(<h1>Professors Page</h1>)
    ).toBe(true);
  })
});