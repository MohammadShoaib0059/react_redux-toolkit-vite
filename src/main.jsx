import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Provider } from 'react-redux';
import Store from './Redux/Store.jsx';
import SignUp from './Components/Authentication/SignUp.jsx';
import SignIn from './Components/Authentication/SignIn.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={Store}>
  <App />
  </Provider>
  </React.StrictMode>,
)
