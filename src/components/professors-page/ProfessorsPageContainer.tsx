import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import ProfessorsPage from './ProfessorsPage';
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

const ProfessorsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ProfessorsPage);

export default ProfessorsPageContainer;