import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface HomePageProps extends RouteProps {
  setCurrentPage(page: string): void;
}

class HomePage extends React.Component<HomePageProps, {}> {

  componentDidMount() {
    if (this.props.location) {
      this.props.setCurrentPage(this.props.location.pathname);
    }
  }

  render() {
    return (
      <h1>Home Page</h1>
    );
  }
}

export default HomePage;