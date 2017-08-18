import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ArticlePage from './ArticlePage';
import { State } from '../../redux-data/state';

import { asyncSetSelectedArticle, setSelectedArticle } from '../../redux-data/actions/selectedArticleActions';

const mapStateToProps = (state: State) => {
  return {
    article: state.selectedArticle
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
    fetchArticle(id: string) {
      dispatch(asyncSetSelectedArticle(id));
    },

    clearSelectedArticle() {
      dispatch(setSelectedArticle('NOT_ASKED', '', null));
    }
  };
};

const ArticlePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlePage);

export default ArticlePageContainer;