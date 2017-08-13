import * as React from 'react';

import { shallow } from 'enzyme';

import store from '../../redux-data/store';
import ProfessorsPageContainer from './ProfessorsPageContainer';

describe('ProfessorsPageContainer container', () => {
  const context = {
    store
  };
  const wrapper = shallow(<ProfessorsPageContainer />, { context });

  it('Uses ProfessorsPage', () => {
    expect(wrapper.dive().prop('className')).toEqual('ProfessorsPage');
  });

  it('Pass setCurrentPage function to its mounted component', () => {
    expect(wrapper.prop('setCurrentPage')).toBeInstanceOf(Function);
  });
});