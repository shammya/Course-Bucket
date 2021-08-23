
import DateFnsUtils from '@date-io/date-fns';
import { Fade, MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { darkTheme } from 'Theme';
import App from './App';
import './assets/styles/index.css';
import reportWebVitals from './reportWebVitals';
import ScrollToTop from './tools/Tools';





ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Fade>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <MuiThemeProvider theme={darkTheme}>
          <SnackbarProvider maxSnack={12}>
            <ScrollToTop />
            <App />
          </SnackbarProvider>
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </Fade>
  </BrowserRouter>
  // {/* </React.StrictMode>, */ }
  , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
