import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Router';
// import Presentacion from './Presentacion';
// import Contador from './Contador';
// import List from './list/List';
// import App  from './tooltip/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Presentacion/> */}
    {/* <Contador/> */}
    {/* <List /> */}
    <Router/>
    
  </React.StrictMode>
);

