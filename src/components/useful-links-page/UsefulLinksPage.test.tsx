import * as React from 'react';

import { shallow } from 'enzyme';

import UsefulLinksPage from '../useful-links-page/UsefulLinksPage';

describe('UsefulLinksPage component', () => {
  const props = {
    setCurrentPage: (page: string) => {}
  }
  const wrapper = shallow(<UsefulLinksPage {...props} />);

  it('Renders without breaking', () => {
    expect(
      wrapper.contains(<h1>Links Úteis</h1>)
    ).toBe(true);
  })
});