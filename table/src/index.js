import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import About from './routers/about';
import Contact from './routers/contact';
import Pricing from './routers/pricing';
import Home from './routers/home';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <LoginApi/> */}
   
    
    {/* <App/> */}
    <div style={{backgroundColor:"orange",height:"40px"}}>
    <Router>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="about">About us</Link>
        <Link to="pricing">Pricing</Link>
      </div>
      <Routes>
        <Route path="/home" element={""}/>
        <Route path="/contact" element={<App/>}/>
        <Route path="/about" element={""}/>
        <Route path="/pricing" element={""}/>

      </Routes>
    </Router>
    </div>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
