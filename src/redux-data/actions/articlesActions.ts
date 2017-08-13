import { Dispatch } from 'react-redux';
import { State, WebDataStatus, ArticlesType } from '../state';
import { ArticlesAction } from '../actions-types';

export function setArticles (
    status: WebDataStatus,
    data: ArticlesType[],
    error: string = ''
  ): ArticlesAction {

  return {
    type: 'SET_ARTICLES',
    payload: {
      status,
      data,
      error
    }
  };
}

export function concatArticles (
  status: WebDataStatus,
  data: ArticlesType[],
  error: string = ''
): ArticlesAction {

  return {
    type: 'CONCAT_ARTICLES',
    payload: {
      status,
      data,
      error
    }
  };
}

export function setUpdateStatusArticles (
  status: WebDataStatus
): ArticlesAction {

  return {
    type: 'SET_ARTICLES',
    payload: {
      status,
      data: [],
      error: ''
    }
  };
}

export function asyncSetArticles() {
  return (dispatch: Dispatch<State>) => {
    dispatch(setUpdateStatusArticles('LOADING'));

    fetch('https://fga.unb.br/api/v1/articles')
      .then(response => response.json())
      .then((json: {articles: ArticlesType[]})  => {
        let data: ArticlesType[] = json.articles.map(article => ({
          id: article.id,
          body: article.body,
          abstract: article.abstract,
          title: article.title,
          created_at: article.created_at,
          image: article.image
        }));

        dispatch(
          setArticles('SUCCESS', data)
        );
      })
      .catch(err => {
        dispatch(
          setArticles('ERROR', [], String(err))
        );
      });
  };
}
