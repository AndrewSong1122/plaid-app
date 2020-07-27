import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// console.log("React", React)
// console.log("ReactDOM", ReactDOM)
// console.log("App", App)

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
