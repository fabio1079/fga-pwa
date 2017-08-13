import * as React from 'react';
import { RouteProps } from 'react-router-dom';

interface NotFoundPageProps extends RouteProps {
  setCurrentPage(page: string): void;
}

class NotFoundPage extends React.Component<NotFoundPageProps, {}> {
  componentDidMount() {
    if (this.props.location) {
      this.props.setCurrentPage(this.props.location.pathname);
    }
  }

  render() {
    return (
      <div className="NotFoundPage">
        <h1>Ops, página não encontrada...</h1>
        <h2>Error 404</h2>
      </div>
    );
  }
}

export default NotFoundPage;