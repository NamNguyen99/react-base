import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';

const domain = (() => {
  const currentDomain = window.location.hostname;
  
  const {
    REACT_APP_MASTER_DOMAIN,
    REACT_APP_ADMIN_DOMAIN,
    REACT_APP_GUESS_DOMAIN,
  } = process.env;

  switch (currentDomain) {
    case REACT_APP_MASTER_DOMAIN:
      return 'master';
    case REACT_APP_ADMIN_DOMAIN:
      return 'admin';
    case REACT_APP_GUESS_DOMAIN:
      return 'guess';
    default:
      return 'guess';
  }
})();

const App = lazy(() => import(`domain/${domain}/containers/App`));

ReactDOM.render(
  // <React.StrictMode>
  <Suspense fallback={null}>
    <App />
  </Suspense>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
