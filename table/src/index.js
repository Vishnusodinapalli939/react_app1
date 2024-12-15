import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./routers/about";
import Contact from "./routers/contact";
import Pricing from "./routers/pricing";
import Home from "./routers/home";
import LoginApi from "./apicalls/loginapi";
import Calculator from "./tasks/calculator";
import Todo from "./todo/todo";
import Counter from "./states/class/counter";
import Table from "./table";
import ListData from "./DynamicRouting/movies/list";
import ListDetails from "./DynamicRouting/movies/details";
import ProductDetails from "./DynamicRouting/products/productsdetails";
import ProductList from "./DynamicRouting/products/productslist";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link className="link" to="/home">Home</Link>
        <Link className="link" to="/products">Products</Link>
        <Link className="link" to="/remaining">Remaining tasks</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/> 
        <Route path='/remaining' element={<App/>}/>
      </Routes>
    </Router>

  {/* <App/> */}
    {/* movie list using Dynamic Routing */}
    {/* <Router>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/home">Home</Link>
        <Link to="/products">Products</Link>
      </div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<ListData />} />
        <Route path="/products/:id" element={<ListDetails />} />
      </Routes>
    </Router> */}

    {/* <ListData/> */}
    {/* <LoginApi/> */}
    {/* <div style={{backgroundColor:"orange",height:"40px"}}>
    <Router>
      <div style={{display:"flex",justifyContent:"space-evenly"}}>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="about">About us</Link>
        <Link to="pricing">Pricing</Link>
        <Link to="/task1">Task1</Link>
        <Link to="/task2">Task2</Link>
        <Link to="/task3">Task3</Link>
        <Link to="/task4">Task4</Link>
      </div>
      <Routes>
        <Route path="/task1" element={<LoginApi/>}/>
        <Route path="/task2" element={<Calculator/>}/>
        <Route path="/task3" element={<Todo/>}/>
        <Route path="/task4" element={<Counter/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Table/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/pricing" element={<Pricing/>}/>

      </Routes>
    </Router>
    </div> */}

    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
