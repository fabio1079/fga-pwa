import * as React from 'react';
import { shallow } from 'enzyme';

import initialState from '../../redux-data/state';
import HomePage from '../home-page/HomePage';

describe('HomePage component', () => {
  const props = {
    setCurrentPage(page: string) { },
    fetchArticles(page: number) { },
    clearArticles() { }
  }

  it('Display a diferent content based on the articles status', () => {
    let articles = initialState.articles;

    articles.status = 'NOT_ASKED';
    let homePage = shallow(<HomePage {...props} articles={articles} />);

    expect(
      homePage.find('h2').text()
    ).toEqual('Carregando notícias');

    articles.status = 'LOADING';
    homePage = shallow(<HomePage {...props} articles={articles} />);

    expect(
      homePage.find('h2').text()
    ).toEqual('Carregando notícias');

    articles.status = 'ERROR';
    homePage = shallow(<HomePage {...props} articles={articles} />);

    expect(
      homePage.find('h2').text()
    ).toEqual('Ops, algum ocorreu enquanto carregava as notícias. Tente novamente');

    articles.status = 'SUCCESS';
    homePage = shallow(<HomePage {...props} articles={articles} />);

    expect(
      homePage.find('Articles')
    ).toHaveLength(1);
  });
});