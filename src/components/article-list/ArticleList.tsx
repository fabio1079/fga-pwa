import * as React from 'react';
import { ArticlesType } from '../../redux-data/state';

import ArticleListItem from '../article-list-item/ArticleListItem';

interface ArticleListProps {
  articles: ArticlesType[];
}

class ArticleList extends React.Component<ArticleListProps, {}> {
  render() {
    return (
      <div className="Articles">
        {this.props.articles.map(article =>
          <ArticleListItem article={article} key={article.id} />
        )}
      </div>
    );
  }
}

export default ArticleList;