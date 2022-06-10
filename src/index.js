import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LogRocket from 'logrocket'

if (process.env.REACT_APP_LOGROCKET_ID){
  Logrocket.init(process.env.REACT_APP_LOGROCKET_ID)
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
