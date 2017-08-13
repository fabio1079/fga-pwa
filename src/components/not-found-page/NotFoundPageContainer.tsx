import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import NotFoundPage from './NotFoundPage';
import { State } from '../../redux-data/state';
import { setCurrentPath } from '../../redux-data/actions/currentPathActions';

const mapStateToProps = (state: State) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
    setCurrentPage(page: string) {
      dispatch(setCurrentPath(page));
    }
  };
};

const NotFoundPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFoundPage);

export default NotFoundPageContainer;