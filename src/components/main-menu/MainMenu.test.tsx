import * as React from 'react';

import { shallow } from 'enzyme';

import MainMenu, { MainMenuProps } from './MainMenu';

describe('App component', () => {
  const wrapper = shallow(<MainMenu />);


  it('By default it has position fixed-bottom', () => {
    const props: MainMenuProps = wrapper.instance().props;

    expect(props.position).toEqual('fixed-bottom');
  });


  it('Has 4 links', () => {
    expect(
      wrapper.contains(<div className="sub-item">Notícias</div>)
    ).toBe(true);

    expect(
      wrapper.contains(<div className="sub-item">Professores</div>)
    ).toBe(true);

    expect(
      wrapper.contains(<div className="sub-item">Contato</div>)
    ).toBe(true);

    expect(
      wrapper.contains(<div className="sub-item">Links Úteis</div>)
    ).toBe(true);
  });
})
