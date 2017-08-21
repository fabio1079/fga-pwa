import * as React from 'react';
import { shallow } from 'enzyme';

import { WebDataStatus } from '../../redux-data/state';
import { webDataStatusSwitchDisplay } from '../WebDataUtils';

describe('WebDataUtils util functions', () => {

  it('webDataStatusSwitchDisplay switch JSX.Elements between webdata status', () => {
    const webDataSwitchFactory = (status: WebDataStatus) => {
      return webDataStatusSwitchDisplay (status)
        (() => <span>not asked</span>)
        (() => <span>loading</span>)
        (() => <span>error</span>)
        (() => <span>success</span>);
    }

    let shallowElement = shallow(webDataSwitchFactory('NOT_ASKED'));

    expect(
      shallowElement.text()
    ).toEqual('not asked');

    shallowElement = shallow(webDataSwitchFactory('LOADING'));

    expect(
      shallowElement.text()
    ).toEqual('loading');


    shallowElement = shallow(webDataSwitchFactory('ERROR'));

    expect(
      shallowElement.text()
    ).toEqual('error');


    shallowElement = shallow(webDataSwitchFactory('SUCCESS'));

    expect(
      shallowElement.text()
    ).toEqual('success');
  });
});
