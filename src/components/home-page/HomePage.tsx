import * as React from 'react';
import { RouteProps } from 'react-router-dom';
import { WebData, ArticlesType } from '../../redux-data/state';

import { webDataStatusSwitchDisplay } from '../../utils/WebDataUtils';
import Articles from '../articles/Articles';

interface HomePageProps extends RouteProps {
  articles: WebData<ArticlesType>;
  setCurrentPage(page: string): void;
  fetchArticles(page: number): void;
  clearArticles(): void;
}

class HomePage extends React.Component<HomePageProps, {}> {

  componentDidMount() {
    if (this.props.location) {
      this.props.setCurrentPage(this.props.location.pathname);
    }

    console.log(this.props.articles.status);

    if (this.props.articles.status === 'NOT_ASKED') {
      this.props.fetchArticles(1);
    }
  }

  componentWillUnmount() {
    this.props.clearArticles();
  }

  render() {
    return (
      <div className="HomePage">
        {webDataStatusSwitchDisplay
            (this.props.articles.status)
            (<h2>Carregando notícias</h2>)
            (<h2>Carregando notícias</h2>)
            (
              <div className="web-data-error-message">
                <h2>Ops, algum ocorreu enquanto carregava as notícias. Tente novamente</h2>
                <span>
                  {this.props.articles.error}
                </span>
            </div>
            )
            (<Articles articles={this.props.articles.data} />)}
      </div>
    );
  }
}

export default HomePage;