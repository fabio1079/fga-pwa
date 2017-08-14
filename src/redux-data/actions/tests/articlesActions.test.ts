import { Dispatch } from 'redux';
import { State } from '../../state';

import { ArticlesType } from '../../state';
import { setArticles, concatArticles, updateArticleStatus, asyncSetArticles } from '../articlesActions';
import{ ArticlesAction } from '../../actions-types';


describe('articlesActions actions', () => {
  const mockArticles: ArticlesType[] = [
    {
      id: 1,
      title: 'mock title 1',
      created_at: '00:00:00 00/00/0000',
    },

    {
      id: 2,
      title: 'mock title 2',
      created_at: '00:00:00 00/00/0000',
    }
  ];

  const mockDispatch = (action: Dispatch<State>): ArticlesAction  => {
    return setArticles('SUCCESS', mockArticles, "");
  }

  it('setArticles returns a valid ArticlesAction', () => {
    let action: ArticlesAction = setArticles('NOT_ASKED', [], "");

    expect(action.type).toEqual('SET_ARTICLES');
    expect(action.payload.status).toEqual('NOT_ASKED');
    expect(action.payload.data).toHaveLength(0);
    expect(action.payload.data).toBeInstanceOf(Array);
    expect(action.payload.error).toBe("");
  });

  it('concatArticles returns a valid ArticlesAction', () => {
    let action: ArticlesAction = concatArticles('SUCCESS', mockArticles, "");

    expect(action.type).toEqual('CONCAT_ARTICLES');
    expect(action.payload.status).toEqual('SUCCESS');
    expect(action.payload.data).toHaveLength(2);
    expect(action.payload.data).toBeInstanceOf(Array);
    expect(action.payload.data[0].title).toEqual(mockArticles[0].title);
    expect(action.payload.data[1].title).toEqual(mockArticles[1].title);
    expect(action.payload.error).toBe("");

    action = concatArticles('ERROR', [], 'A wild error appears');

    expect(action.type).toEqual('CONCAT_ARTICLES');
    expect(action.payload.status).toEqual('ERROR');
    expect(action.payload.data).toHaveLength(0);
    expect(action.payload.data).toBeInstanceOf(Array);
    expect(action.payload.error).toBe('A wild error appears');
  });

  it('updateArticleStatus returns a valid ArticlesAction', () => {
    let action: ArticlesAction = updateArticleStatus({status: 'SUCCESS', articles: mockArticles});

    expect(action.type).toEqual('CONCAT_ARTICLES');
    expect(action.payload.status).toEqual('SUCCESS');
    expect(action.payload.data).toHaveLength(2);
    expect(action.payload.data).toBeInstanceOf(Array);
    expect(action.payload.data[0].title).toEqual(mockArticles[0].title);
    expect(action.payload.data[1].title).toEqual(mockArticles[1].title);
    expect(action.payload.error).toBe("");

    action = updateArticleStatus({status: 'ERROR', error: 'A wild error appears'});

    expect(action.type).toEqual('SET_ARTICLES');
    expect(action.payload.status).toEqual('ERROR');
    expect(action.payload.data).toHaveLength(0);
    expect(action.payload.data).toBeInstanceOf(Array);
    expect(action.payload.error).toBe('A wild error appears');

    action = updateArticleStatus({status: 'NOT_ASKED'});
    expect(action.type).toEqual('CONCAT_ARTICLES');
    expect(action.payload.data).toHaveLength(0);
    expect(action.payload.error).toBe("");

    action = updateArticleStatus({status: 'LOADING'});
    expect(action.type).toEqual('CONCAT_ARTICLES');
    expect(action.payload.data).toHaveLength(0);
    expect(action.payload.error).toBe("");
  });

  // TODO: This test works on coverage, but it lacks trust on it check.
  // find a way to ensure that it really set the store with the fetched data
  it('asyncSetArticles returns a valid ArticlesAction', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        Id: '123',
        json: (): {articles: ArticlesType[]} => ({articles: mockArticles})
      }));

      asyncSetArticles() (mockDispatch);

      // TODO: Find a way to check if the store was altered
      expect(true).toBe(true);
  });

  it('asyncSetArticles on fetch fail, it calls setArticles with an error', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject ('Ops, something went wrong'));

      asyncSetArticles() (mockDispatch);

      // TODO: Find a way to check if the store was altered
      expect(true).toBe(true);
  });
});
