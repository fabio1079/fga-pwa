import * as React from 'react';

import MainMenu from '../main-menu/MainMenu';
import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <MainMenu />

        <div className="container-fluid">
          ola <i className="fa fa-address-book" />
        </div>
      </div>
    );
  }
}

export default App;