import articlesReducer from '../articlesReducer';
import initialState from '../../state';

import { setArticles, concatArticles } from '../../actions/articlesActions';

describe('articlesReducer reducer', () => {
  it('set articles', () => {
    let state = {...initialState};
    let action = setArticles('ERROR', [], 'Ops, error here');

    expect(state.articles.status).toBe('NOT_ASKED');
    expect(state.articles.error).toBe('');

    state.articles = articlesReducer(state.articles, action);

    expect(state.articles.status).toBe('ERROR');
    expect(state.articles.error).toBe('Ops, error here');
  });

  it('concat articles', () => {
    let state = {...initialState};
    let mockArticle = {
      id: 1,
      title: 'mock title 1',
      created_at: '00:00:00 00/00/0000',
      body: 'mock body'
    };
    let action = concatArticles('SUCCESS', [mockArticle], '');

    expect(state.articles.status).toBe('NOT_ASKED');
    expect(state.articles.data).toHaveLength(0);
    expect(state.articles.data).toBeInstanceOf(Array);
    expect(state.articles.error).toBe('');

    state.articles = articlesReducer(state.articles, action);

    expect(state.articles.status).toBe('SUCCESS');
    expect(state.articles.data).toHaveLength(1);
    expect(state.articles.data).toBeInstanceOf(Array);
    expect(state.articles.error).toBe('');
  });
});
