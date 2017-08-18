import initialState, { WebData, ArticleType } from '../state';
import { SelectedArticlesAction } from '../actions-types';

function selectedArticleReducer(
    selectedArticle: WebData<ArticleType | null> = initialState.selectedArticle,
    action: SelectedArticlesAction
  ): WebData<ArticleType | null> {

  switch (action.type) {
    case 'SET_SELECTED_ARTICLE':
      return action.payload;

    default:
      return selectedArticle;
  }
}

export default selectedArticleReducer;