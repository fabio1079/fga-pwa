import * as React from 'react';
import { Link } from 'react-router-dom';

import { CurrentPathState } from '../../redux-data/state';

import './MainMenu.css';

export interface MainMenuProps {
  position?: 'fixed-top' | 'fixed-bottom';
  currentPath: CurrentPathState;
}

interface MainMenuState {}

class MainMenu extends React.Component<MainMenuProps, MainMenuState> {

  public static defaultProps: Partial<MainMenuProps> = {
    position: 'fixed-bottom'
  };

  getClassName(...linkPath: string[]): string {
    let className = 'col item ';

    if (linkPath.indexOf(this.props.currentPath) !== -1) {
      className += 'active';
    }

    return className;
  }

  render() {
    return (
      <div className="MainMenu">
        <nav className={`row ${this.props.position}`}>
          <div className={this.getClassName('/', '/news')}>
            <Link to="/news">
              <div className="sub-item">
                <i className="fa fa-newspaper-o" />
              </div>

              <div className="sub-item">
                Notícias
              </div>
            </Link>
          </div>

          <div className={this.getClassName('/professors')}>
            <Link to="/professors">
              <div className="sub-item">
                <i className="fa fa-address-book" />
              </div>

              <div className="sub-item">
                Professores
              </div>
            </Link>
          </div>

          <div className={this.getClassName('/contact')}>
            <Link to="/contact">
              <div className="sub-item">
                <i className="fa fa-plus" />
              </div>

              <div className="sub-item">
                Contato
              </div>
            </Link>
          </div>

          <div className={this.getClassName('/useful-links')}>
            <Link to="/useful-links">
              <div className="sub-item">
                <i className="fa fa-link" />
              </div>

              <div className="sub-item">
                Links Úteis
              </div>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default MainMenu;