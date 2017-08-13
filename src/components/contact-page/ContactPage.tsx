import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface ContactPageProps extends RouteProps {
  setCurrentPage(page: string): void;
}

class ContactPage extends React.Component<ContactPageProps, {}> {
  componentDidMount() {
    if (this.props.location) {
      this.props.setCurrentPage(this.props.location.pathname);
    }
  }

  render() {
    return (
      <h1>Contact Page</h1>
    );
  }
}

export default ContactPage;