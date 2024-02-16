import React from 'react';
import ReactDOM from 'react-dom/client';
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './Redux/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/' forceRefresh='true'>
      {/* <GoogleOAuthProvider clientId="452341324827-0srbf32t3ki8fojoan5u4f4mqmuorabq.apps.googleusercontent.com"> */}
        <Provider store={store}>
          <GlobalStyle/>
          <App />
          <ToastContainer/>
        </Provider>
      {/* </GoogleOAuthProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
