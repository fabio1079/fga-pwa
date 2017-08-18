import * as React from 'react';
import { ArticleType } from '../../redux-data/state';

import ArticleListItem from '../article-list-item/ArticleListItem';

interface ArticleListProps {
  articles: ArticleType[];
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