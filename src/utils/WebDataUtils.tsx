import * as React from 'react';
import { WebDataStatus } from '../redux-data/state';

export const webDataStatusSwitchDisplay =
  (webDataStatus: WebDataStatus) =>
  (notAsked: () => JSX.Element) =>
  (loading: () => JSX.Element) =>
  (error: () => JSX.Element) =>
  (success: () => JSX.Element) => {
    switch (webDataStatus) {
      case 'NOT_ASKED':
        return notAsked();

      case 'LOADING':
        return loading();

      case 'ERROR':
        return error();

      case 'SUCCESS':
        return success();

      default:
        return (
          <div className="web-data-error-message">
            <h2>Invalid data status</h2>
          </div>
        );
    }
  };
