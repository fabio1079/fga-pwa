import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { ArticleType, WebData } from '../../redux-data/state';

import { webDataStatusSwitchDisplay } from '../../utils/WebDataUtils';
import Spinner from '../spinner/Spinner';

import './ArticlePage.css';

interface ArticleRouteProps {
  id: string;
}

interface ArticlePageProps extends RouteComponentProps<ArticleRouteProps>  {
  article: WebData<ArticleType | null>;
  fetchArticle(id: string): void;
  clearSelectedArticle(): void;
}

class ArticlePage extends React.Component<ArticlePageProps, {}> {

  componentDidMount() {
    if (this.props.article.status === 'NOT_ASKED') {
      this.props.fetchArticle(
        this.props.match.params.id
      );
    }
  }

  componentWillUnmount() {
    this.props.clearSelectedArticle();
  }

  errorMessage(error: string): JSX.Element {
    return (
      <div className="error-message">
        <h1>Ops, algo deu errado</h1>
        <span>{error}</span>
      </div>
    );
  }

  successMessage(article: ArticleType): JSX.Element {
    return (
      <div className="success-message">
        <h1>
          {article.title}
        </h1>

        <div className="article-created-at">
          {article.created_at}
        </div>

        <div className="article-body" dangerouslySetInnerHTML={{__html: article.body}} />
      </div>
    );
  }

  render() {
    return (
      <div className="ArticlePage">
        {
          this.props.article.data ?
            webDataStatusSwitchDisplay(this.props.article.status)
              (() => <Spinner />)
              (() => <Spinner />)
              (() => this.errorMessage(this.props.article.error))
              (() => this.successMessage(this.props.article.data))
          :
            <Spinner />
        }
      </div>
    );
  }
}

export default ArticlePage;