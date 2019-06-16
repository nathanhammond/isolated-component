import React, { Fragment } from 'react';
import { withSharedContext } from './shared-context';

class IsolatedComponent extends React.Component {
  constructor() {
    super(...arguments);

    this.updateDate = () => {
      this.setState({ date: new Date() });
    };
  }

  render() {
    return (
      <Fragment>
        {JSON.stringify(this.props.shared.date)}
        <button onClick={this.props.shared.dispatch}>Update Date</button>
      </Fragment>
    );  
  }
}

export default withSharedContext(IsolatedComponent);
