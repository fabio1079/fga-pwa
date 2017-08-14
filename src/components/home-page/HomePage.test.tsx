import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { spy as  sinonSpy } from 'sinon';
import { expect as chaiExpect } from 'chai';

import initialState from '../../redux-data/state';
import HomePage from '../home-page/HomePage';

describe('HomePage component', () => {
  let props = {
    setCurrentPage(page: string) { },
    fetchArticles(page: number) { },
    clearArticles() { }
  }

  it('Display a diferent content based on the articles status', () => {
    // lets use object spread to NOT mutate it
    // by mutating it, side effects can occur on other tests
    let articles = {...initialState.articles};

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

  it('calls setCurrentPage on mount if there is a location', () => {
    let location = {
      pathname: '/news',
      search: '',
      state: '',
      hash: '',
      key: ''
    }

    let spy = sinonSpy(props, 'setCurrentPage');

    mount(
      <HomePage
        location={location}
        setCurrentPage={props.setCurrentPage}
        articles={initialState.articles}
        fetchArticles={props.fetchArticles}
        clearArticles={props.clearArticles}
      />
    );

    // Verify spy was called on componentDidMount
    chaiExpect(spy.calledOnce).to.equal(true);

    // Clean up spy
    spy.restore();
  });

  it('calls for fetchArticles on mount if articles status is NOT_ASKED', () => {
    let articles = {...initialState.articles};
    articles.status = 'NOT_ASKED';

    let spy = sinonSpy(props, 'fetchArticles');

    mount(
      <HomePage
        {...props}
        articles={articles}
      />
    );

    // Verify spy was called on componentDidMount
    chaiExpect(spy.calledOnce).to.equal(true);

    // Clean up spy
    spy.restore();
  });
});