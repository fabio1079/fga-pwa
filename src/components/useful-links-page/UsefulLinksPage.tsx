import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface UsefulLinksPageProps extends RouteProps {
  setCurrentPage(page: string): void;
}

class UsefulLinksPage extends React.Component<UsefulLinksPageProps, {}> {
  componentDidMount() {
    if (this.props.location) {
      this.props.setCurrentPage(this.props.location.pathname);
    }
  }

  render() {
    return (
      <h1>Links Úteis</h1>
    );
  }
}

export default UsefulLinksPage;