import * as React from 'react';
import { shallow } from 'enzyme';

import Spinner from './Spinner';

describe('Spinnner component', () => {
  it('Display a Spinnner', () => {
    let spinner = shallow(<Spinner />);

    expect(
      spinner.prop('className')
    ).toEqual('Spinner');

    expect(
      spinner.find('i.fa.fa-spinner')
    ).toHaveLength(1);
  });
});