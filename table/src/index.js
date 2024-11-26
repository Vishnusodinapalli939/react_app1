import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Table from './table.js'
import Main from './class.jsx';
import Obj from './22-11-24/obj.jsx'
import TableData from './22-11-24/table.jsx';
import FunctionProps from './props-25/functional.jsx';
import ClassProps from './props-25/class.jsx';
import App2 from './props-25/funtway2.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Table/>
    <Main/>
    <Obj></Obj>
    <TableData/>
    {/* <FunctionProps name="vishnu" city="kadapa"/>
    <FunctionProps name="vardhan" city="hyd"/> */}
    
    
    <FunctionProps>
      <h1>Hello<span>Hii</span></h1>
      <p>welcocme</p>
    </FunctionProps>
    <ClassProps role="developer" age="21"/>
    <ClassProps role="testing" age="21"/>
    <App2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
