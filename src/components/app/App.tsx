import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import MainMenuContainer from '../main-menu/MainMenuContainer';

import HomePageContainer from '../home-page/HomePageContainer';
import ProfessorsPageContainer from '../professors-page/ProfessorsPageContainer';
import ContactPageContainer from '../contact-page/ContactPageContainer';
import UsefulLinksPageContainer from '../useful-links-page/UsefulLinksPageContainer';

import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainMenuContainer />

            <div className="container-fluid">
              <Route exact={true} path="/" component={HomePageContainer} />
              <Route path="/news" component={HomePageContainer} />
              <Route path="/professors" component={ProfessorsPageContainer} />
              <Route path="/contact" component={ContactPageContainer} />
              <Route path="/useful-links" component={UsefulLinksPageContainer} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;