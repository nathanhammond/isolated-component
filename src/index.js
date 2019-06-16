import React from 'react';
import ReactDOM from 'react-dom';
import IsolatedComponent from './isolated-component';

var $ = document.getElementById.bind(document);
ReactDOM.render(<IsolatedComponent />, $('one'));
ReactDOM.render(<IsolatedComponent />, $('two'));
