import { WebData, ArticlesType } from './state';

export type CurrentPathAction = {
  type: 'SET_CURRENT_PATH',
  payload: string
};

export type ArticlesAction = {
  type: 'SET_ARTICLES' | 'CONCAT_ARTICLES' | 'UPDATE_STATUS_ARTICLES',
  payload: WebData<ArticlesType[]>
};

export type Action
  = CurrentPathAction
  | ArticlesAction;
