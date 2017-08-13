import * as React from 'react';

import { shallow } from 'enzyme';

import store from '../../redux-data/store';
import UsefulLinksPageContainer from './UsefulLinksPageContainer';

describe('UsefulLinksPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<UsefulLinksPageContainer />, { context });

  it('Uses UsefulLinksPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('UsefulLinksPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });
});