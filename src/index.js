import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './root-component';

var $ = document.getElementById.bind(document);
ReactDOM.render(<RootComponent />, $('one'));
ReactDOM.render(<RootComponent />, $('two'));
