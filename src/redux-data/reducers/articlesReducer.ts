import initialState, { WebData, ArticlesType } from '../state';
import { ArticlesAction } from '../actions-types';

function articlesReducer(
    articles: WebData<ArticlesType> = initialState.articles,
    action: ArticlesAction
  ): WebData<ArticlesType> {

  switch (action.type) {
    case 'SET_ARTICLES':
      return action.payload;

    case 'CONCAT_ARTICLES':
      let newArticles: WebData<ArticlesType> = action.payload;
      let oldData: ArticlesType[] = articles.data;

      return {
        status: newArticles.status,
        error: newArticles.error,
        data: [...oldData, ...newArticles.data]
      };

    default:
      return articles;
  }
}

export default articlesReducer;