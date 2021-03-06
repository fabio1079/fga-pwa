import * as React from 'react';

import { shallow } from 'enzyme';

import ContactPage from '../contact-page/ContactPage';

describe('ContactPage component', () => {
  const props = {
    setCurrentPage: (page: string) => {}
  }

  const wrapper = shallow(<ContactPage {...props} />);

  it('Renders without breaking', () => {
    expect(
      wrapper.contains(<h1>Contact Page</h1>)
    ).toBe(true);
  })
});