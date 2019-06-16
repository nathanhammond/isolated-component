import React from 'react';
import ReactDOM from 'react-dom';
import IsolatedComponent from './isolated-component';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IsolatedComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
