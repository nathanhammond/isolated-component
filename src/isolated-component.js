import React, { Fragment } from 'react';
import { SharedContext } from './shared-context';

class IsolatedComponent extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      date: new Date()
    };

    this.updateDate = () => {
      this.setState(() => ({ date: new Date() }));
    };
  }

  render() {
    return (
      <SharedContext.Provider value={this.state}>
        <SharedContext.Consumer>
          {({ date }) => (
            <Fragment>
              {JSON.stringify(date)}
              <button onClick={this.updateDate}>Update Date</button>
            </Fragment>
          )}
        </SharedContext.Consumer>
      </SharedContext.Provider>
    );  
  }
}
IsolatedComponent.contextType = SharedContext;

export default IsolatedComponent;
