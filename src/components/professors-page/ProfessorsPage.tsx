import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface ProfessorsPageProps extends RouteProps {
  setCurrentPage(page: string): void;
}

class ProfessorsPage extends React.Component<ProfessorsPageProps, {}> {
  componentDidMount() {
    if (this.props.location) {
      this.props.setCurrentPage(this.props.location.pathname);
    }
  }

  render() {
    return (
      <h1>Professors Page</h1>
    );
  }
}

export default ProfessorsPage;