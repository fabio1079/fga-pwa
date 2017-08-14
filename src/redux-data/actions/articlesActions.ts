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

type UpdateArticleStatus = {
  status: WebDataStatus,
  error?: string,
  articles?: ArticlesType[]
};

export function updateArticleStatus(update: UpdateArticleStatus): ArticlesAction {
  switch (update.status) {
    case 'NOT_ASKED':
    case 'LOADING':
      return concatArticles(update.status, []);

    case 'ERROR':
      let err = update.error ? update.error : '';
      return setArticles('ERROR', [], err);

    case 'SUCCESS':
      let data = update.articles ? update.articles : [];
      return concatArticles('SUCCESS', data);

    default:
      throw new Error(`Invalid WebDataStatus: ${update.status}`);
  }
}

export function asyncSetArticles() {
  return (dispatch: Dispatch<State>) => {
    dispatch(updateArticleStatus({status: 'LOADING'}));

    fetch('https://fga.unb.br/api/v1/articles?parent_id=46')
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
          updateArticleStatus({status: 'ERROR', error: String(err)})
        );
      });
  };
}
