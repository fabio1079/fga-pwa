import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import UsefulLinksPage from './UsefulLinksPage';
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

const UsefulLinksPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (UsefulLinksPage);

export default UsefulLinksPageContainer;