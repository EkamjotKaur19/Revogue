import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {ThemeProvider} from '@material-ui/core/styles';

import theme from './theme'; 

import App from './App';

// import SignIn from './components/Login/SignIn';
// import SignUp from './components/Login/SignUp';

// ReactDOM.render(<SignUp/>, document.getElementById('root'));
// ReactDOM.render(<SignIn/>, document.getElementById('root'));
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App/>
  </ThemeProvider>, 
  document.getElementById('root')
);