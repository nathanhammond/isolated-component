import React from 'react';
import { SharedProvider } from './shared-context';
import IsolatedComponent from './isolated-component';

class RootComponent extends React.Component {
  constructor() {
    super(...arguments);
  }

  render() {
    return (          
      <SharedProvider>
        <IsolatedComponent />
      </SharedProvider>
    );
  }
}

export default RootComponent;
