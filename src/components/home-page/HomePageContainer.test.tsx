import * as React from 'react';

import { shallow } from 'enzyme';

import store from '../../redux-data/store';
import HomePageContainer from './HomePageContainer';

describe('HomePageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<HomePageContainer />, { context });

  it('Uses HomePage', () => {
    expect(wrapper.dive().prop('className')).toEqual('HomePage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });
});