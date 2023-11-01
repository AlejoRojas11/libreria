import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './App'; */
// import Presentacion from './Presentacion';
import Contador from './Contador';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Presentacion/> */}
    <Contador/>
  </React.StrictMode>
);

