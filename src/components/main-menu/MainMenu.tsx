import * as React from 'react';

import { Link } from 'react-router-dom';

import './MainMenu.css';

export interface MainMenuProps {
  position?: 'fixed-top' | 'fixed-bottom';
}

interface MainMenuState { }

class MainMenu extends React.Component<MainMenuProps, MainMenuState> {

  public static defaultProps: Partial<MainMenuProps> = {
    position: 'fixed-bottom'
  };

  constructor(props: MainMenuProps) {
    super(props);
  }

  render() {
    return (
      <nav className={`MainMenu row ${this.props.position}`}>
        <div className="col item active">
          <Link to="/news">
            <div className="sub-item">
              <i className="fa fa-newspaper-o" />
            </div>

            <div className="sub-item">
              Notícias
            </div>
          </Link>
        </div>

        <div className="item col">
          <Link to="/professors">
            <div className="sub-item">
              <i className="fa fa-address-book" />
            </div>

            <div className="sub-item">
              Professores
            </div>
          </Link>
        </div>

        <div className="item col">
          <Link to="/contact">
            <div className="sub-item">
              <i className="fa fa-plus" />
            </div>

            <div className="sub-item">
              Contato
            </div>
          </Link>
        </div>

        <div className="item col">
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
    );
  }
}

export default MainMenu;