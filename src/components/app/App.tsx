import * as React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import MainMenu from '../main-menu/MainMenu';
import HomePage from '../home-page/HomePage';
import ProfessorsPage from '../professors-page/ProfessorsPage';
import ContactPage from '../contact-page/ContactPage';
import UsefulLinksPage from '../useful-links-page/UsefulLinksPage';

import './App.css';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <MainMenu />

            <div className="container-fluid">
              <Route exact={true} path="/" component={HomePage} />
              <Route path="/news" component={HomePage} />
              <Route path="/professors" component={ProfessorsPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/useful-links" component={UsefulLinksPage} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;