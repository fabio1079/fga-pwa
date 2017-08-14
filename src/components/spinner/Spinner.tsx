import * as React from 'react';

import './Spinner.css';

class Spinner extends React.Component<{}, {}> {
  render() {
    return (
      <div className="Spinner">
        <i className="fa fa-spinner" />
      </div>
    );
  }
}

export default Spinner;