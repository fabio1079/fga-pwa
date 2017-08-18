import initialState, { WebData, ArticleType } from '../state';
import { ArticlesAction } from '../actions-types';

function articlesReducer(
    articles: WebData<ArticleType[]> = initialState.articles,
    action: ArticlesAction
  ): WebData<ArticleType[]> {

  switch (action.type) {
    case 'SET_ARTICLES':
      return action.payload;

    case 'CONCAT_ARTICLES':
      let newArticles: WebData<ArticleType[]> = action.payload;
      let oldData: ArticleType[] = articles.data;

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