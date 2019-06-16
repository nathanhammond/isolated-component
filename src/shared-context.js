import React from 'react';

export const INITIAL_STATE = {
  date: new Date()
};

const SharedContext = React.createContext(INITIAL_STATE);

export class SharedProvider extends React.Component {
  constructor() {
    super(...arguments);

    let self = this;
    this.state = {
      ...INITIAL_STATE,
      dispatch() {
        self.setState((currentState) => {
          return ({
            ...currentState,
            date: new Date()
          });
        })
      }
    };
  }

  render() {
    return (
      <SharedContext.Provider value={{...this.state}}>
        {this.props.children}
      </SharedContext.Provider>
    );
  }
}

export const withSharedContext = (ChildComponent) => (props) => (
  <SharedContext.Consumer>
    {
      context => <ChildComponent {...props} shared={context} />
    }
  </SharedContext.Consumer>
);

export default SharedContext;
