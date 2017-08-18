import { WebData, ArticleType } from './state';

export type CurrentPathAction = {
  type: 'SET_CURRENT_PATH',
  payload: string
};

export type ArticlesAction = {
  type: 'SET_ARTICLES' | 'CONCAT_ARTICLES' | 'UPDATE_STATUS_ARTICLES',
  payload: WebData<ArticleType[]>
};

export type SelectedArticlesAction = {
  type: 'SET_SELECTED_ARTICLE',
  payload: WebData<ArticleType | null>
}

export type Action
  = CurrentPathAction
  | ArticlesAction
  | SelectedArticlesAction;
