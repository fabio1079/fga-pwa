import * as React from 'react';
import { ArticlesType } from '../../redux-data/state';

import './ArticleListItem.css';

interface ArticleListItemProps {
  article: ArticlesType;
}

interface ArticleListItemState {
  day: number;
  month: number;
  image: string;
  summary: string;
}

const BASE_URL: string = 'https://fga.unb.br/';
const monthNames = [
  'janeiro', 'fevereiro', 'março', 'abril',
  'maio', 'junho', 'julho', 'agosto',
  'setembro', 'outubro', 'novembro', 'dezembro'
];

class ArticleListItem extends React.Component<ArticleListItemProps, ArticleListItemState> {
  constructor(props: ArticleListItemProps) {
    super(props);

    const date = new Date(props.article.created_at);

    this.state = {
      day: date.getDay(),
      month: date.getMonth(),
      image: this.getFirstImageFromBody(props.article.body),
      summary: this.props.article.abstract ? this.props.article.abstract : this.props.article.body
    };
  }

  getFirstImageFromBody(body: string): string {
    const imageRegex = /(<img.+?src=")(.+?)(".+?>)/gim;
    const match = imageRegex.exec(body);
    let link = '';

    if (match) {
      link = match[2];

      if (link.indexOf('http:') !== 0) {
        link = BASE_URL + link;
      }
    } else {
      link = '';
    }

    return link;
  }

  render() {
    return (
      <div className="ArticleListItem">
        <div className="card">
          <div className="card-container">
            <img className="card-img-top" src={this.state.image} alt="Card image cap" />
          </div>

          <div className="card-block">
            <h4 className="card-title">
              {this.props.article.title}
            </h4>

            <p
              className="card-text"
              dangerouslySetInnerHTML={{ __html: this.state.summary }}
            />

            <span className="create-at">
              {this.state.day} de {monthNames[this.state.month]}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleListItem;
