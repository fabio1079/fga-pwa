import * as React from 'react';
import { ArticlesType } from '../../redux-data/state';

interface ArticlesProps {
  articles: ArticlesType[];
}

class Articles extends React.Component<ArticlesProps, {}> {
  render() {
    return (
      <div className="Articles">
        <h1>Articles list goes here !</h1>
      </div>
    );
  }
}

export default Articles;