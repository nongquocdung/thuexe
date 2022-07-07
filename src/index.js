import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {ToastContainer} from 'react-toastify'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
const theme = createTheme({
  palette: {
    primary: {
      main: "#234378",
    },
    secondary: {
      main: "#B32034",
    },
    table: {
      head: "#333",
      row: "rgba(63, 80, 181, 0.1)",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={true}
        closeonClick={true}
        draggable={true}
        style={{maxWidth:300, left:'unset',right:0}}/>
  <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
