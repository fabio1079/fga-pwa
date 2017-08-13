import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import MainMenu from './MainMenu';
import { State } from '../../redux-data/state';

const mapStateToProps = (state: State) => {
  return {
    currentPath: state.currentPath
  };
};

const mapDispatchToProps = (dispatch: Dispatch<State>) => {
  return {
  };
};

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);

export default MainMenuContainer;