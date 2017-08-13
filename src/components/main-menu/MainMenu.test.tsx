import * as React from 'react';

import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import MainMenu, { MainMenuProps } from './MainMenu';

describe('MainMenu component', () => {
  const props = {
    currentPath: '/'
  }
  const wrapper = shallow(<MainMenu {...props} />);


  it('By default it has position fixed-bottom', () => {
    const props: MainMenuProps = wrapper.instance().props;

    expect(props.position).toEqual('fixed-bottom');
  });


  it('Has 4 links', () => {
    expect(
      wrapper.find(Link)
    ).toHaveLength(4)
  });


  it('Links to [/news, /professors, /contact, /useful-links]', () => {
    let links = wrapper.find(Link);
    let hrefs: string[] = [];

    links.forEach(c => {
      hrefs.push(c.prop('to').toString());
    });

    expect(hrefs).toContain('/news');
    expect(hrefs).toContain('/professors');
    expect(hrefs).toContain('/contact');
    expect(hrefs).toContain('/useful-links');
  });

  it('applys the active className on the tab of the given currentPath', () => {
    let mainMenu = shallow(<MainMenu currentPath="/news" />);

    expect(
      mainMenu.find('Link[to="/professors"]').parent().prop('className')
    ).not.toContain('active');

    expect(
      mainMenu.find('Link[to="/news"]').parent().prop('className')
    ).toContain('active');

    mainMenu = shallow(<MainMenu currentPath="/professors" />);

    expect(
      mainMenu.find('Link[to="/professors"]').parent().prop('className')
    ).toContain('active');

    expect(
      mainMenu.find('Link[to="/news"]').parent().prop('className')
    ).not.toContain('active');
  });
});
