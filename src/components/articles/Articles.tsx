import * as React from 'react';
import { ArticlesType } from '../../redux-data/state';

import ArticleListItem from '../article-list-item/ArticleListItem';

interface ArticlesProps {
  articles: ArticlesType[];
}

class Articles extends React.Component<ArticlesProps, {}> {
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

export default Articles;