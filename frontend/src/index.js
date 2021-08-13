
import DateFnsUtils from '@date-io/date-fns';
import { MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { lightTheme } from 'Theme';
import App from './App';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  // <React.StrictMode>
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <MuiThemeProvider theme={lightTheme}>
      <SnackbarProvider maxSnack={12}>
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </MuiPickersUtilsProvider>
  // {/* </React.StrictMode>, */ }
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
