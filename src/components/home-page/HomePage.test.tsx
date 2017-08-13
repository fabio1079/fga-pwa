import * as React from 'react';
import { shallow } from 'enzyme';

import initialState from '../../redux-data/state';
import HomePage from '../home-page/HomePage';

describe('HomePage component', () => {
  const props = {
    articles: initialState.articles,
    setCurrentPage(page: string) { },
    fetchArticles(page: number) { },
    clearArticles() { }
  }

  const wrapper = shallow(<HomePage {...props} />);

  it('Renders without breaking', () => {
    expect(
      wrapper.contains(<h1>Home Page</h1>)
    ).toBe(true);
  })
});