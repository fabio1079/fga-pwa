import * as React from 'react';

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
          <a href="#">
            <div className="sub-item">
              <i className="fa fa-newspaper-o" />
            </div>

            <div className="sub-item">
              Notícias
            </div>
          </a>
        </div>

        <div className="item col">
          <a href="#">
            <div className="sub-item">
              <i className="fa fa-address-book" />
            </div>

            <div className="sub-item">
              Professores
            </div>
          </a>
        </div>

        <div className="item col">
          <a href="#">
            <div className="sub-item">
              <i className="fa fa-plus" />
            </div>

            <div className="sub-item">
              Contato
            </div>
          </a>
        </div>

        <div className="item col">
          <a href="#">
            <div className="sub-item">
              <i className="fa fa-link" />
            </div>

            <div className="sub-item">
              Links Úteis
            </div>
          </a>
        </div>
      </nav>
    );
  }
}

export default MainMenu;