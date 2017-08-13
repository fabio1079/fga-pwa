import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import HomePage from './HomePage';
import initialState, { State } from '../../redux-data/state';
import { setCurrentPath } from '../../redux-data/actions/currentPathActions';
import { asyncSetArticles, setArticles } from '../../redux-data/actions/articlesActions';

const mapStateToProps = (state: State) => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
    setCurrentPage(page: string) {
      dispatch(setCurrentPath(page));
    },

    fetchArticles(page: number) {
      dispatch(asyncSetArticles());
    },

    clearArticles() {
      dispatch(
        setArticles(
          initialState.articles.status,
          initialState.articles.data,
          initialState.articles.error
        )
      );
    }
  };
};

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);

export default HomePageContainer;