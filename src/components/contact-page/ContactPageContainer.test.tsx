import * as React from 'react';

import { shallow } from 'enzyme';

import store from '../../redux-data/store';
import ContactPageContainer from './ContactPageContainer';

describe('ContactPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<ContactPageContainer />, { context });

  it('Uses ContactPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('ContactPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });
});