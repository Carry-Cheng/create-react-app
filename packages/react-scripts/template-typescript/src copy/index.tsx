import React from 'react'
import ReactDOM from 'react-dom'
// amfe-flexible
import 'amfe-flexible'
import './assets/style/index.scss'
import App from './router/App'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
