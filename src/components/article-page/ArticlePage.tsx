import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ArticleType, WebData } from '../../redux-data/state';

interface ArticleRouteProps {
  id: string;
}

interface ArticlePageProps extends RouteComponentProps<ArticleRouteProps>  {
  article: WebData<ArticleType | null>;
  fetchArticle(id: string): void;
}

class ArticlePage extends React.Component<ArticlePageProps, {}> {

  componentDidMount() {
    if (this.props.article.status === 'NOT_ASKED') {
      this.props.fetchArticle(
        this.props.match.params.id
      );
    }
  }

  render() {
    return (
      <div className="ArticlePage">
        <span>ArticlePage hare</span>
      </div>
    );
  }
}

export default ArticlePage;