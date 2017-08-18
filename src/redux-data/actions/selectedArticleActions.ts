import { Dispatch } from 'react-redux';
import { SelectedArticlesAction } from '../actions-types';
import { State, ArticleType, WebDataStatus } from '../state';

export function setSelectedArticle(
  status: WebDataStatus,
  error: string,
  article: ArticleType | null
): SelectedArticlesAction {
  return {
    type: 'SET_SELECTED_ARTICLE',
    payload: {
      status,
      data: article,
      error
    }
  };
}

export function asyncSetSelectedArticle(id: string) {
  return (dispatch: Dispatch<State>) => {
    dispatch(setSelectedArticle('LOADING', '', null));

    fetch(`https://fga.unb.br/api/v1/articles/${id}`)
      .then(r => r.json())
      .then((json: {article: ArticleType}) => {
        let article: ArticleType = {
          id: json.article.id,
          body: json.article.body,
          abstract: json.article.abstract,
          title: json.article.title,
          created_at: json.article.created_at,
          image: json.article.image
        };

        dispatch(setSelectedArticle('SUCCESS', '', article));
      })
      .catch(err => {
        dispatch(setSelectedArticle('ERROR', String(err), null));
      });
  };
}