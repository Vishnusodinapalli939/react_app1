import React from "react";
import axios from "axios";
import ProductsCard from "../../bootstrap/card";
/*
Mounting:
 --Mounting is the initial phase in which the instance of the component is created and inserted into the DOM. 
 --When the component gets successfully inserted into the DOM, the component is said to be mounted.
React has four built-in methods that gets called, in this order, when mounting a component:
    1.constructor()
    2.getDerivedStateFromProps()
    3.render()
    4.componentDidMount()

    1.constructor()--is a method used to create and intialize the states and variables in a class componenet
    2.getDerivedStateFromProps()--method is called right before rendering the element(s) in the DOM.
        --It takes state as an argument, and returns an object with changes to the state.
        --it changes the states based on the props over the time
    3.render()--to insert the jsx into the DOM.
    4.componentDidMount()--method is called after the component is rendered
        --it is a method where we can perform the side effects
        side effects:
        i.http calls when page loads
        ii.dom manuplation when page loads
        iii.timer triggers when page loads
        iv.Event listeners when page loads
Execution flow:
1.constructor()
2.getDerivedStateFromProps()
3.render()
4.componentDidMount()

axios:Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. 
    --This library is very useful to perform CRUD operations.
    --This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.
    --Using Axios we make API requests in our application. Once the request is made we get the data in Return, and then we use this data in our project. 
methods:
1.axios.get()--to get the data the from url or API's
2.axios.post()--to post the data using API
3.axios.delete()--to delete the data

Response Objects in Axios
When you send a request to the server, you receive a response object from the server with the properties given below…
    i.data: You receive data from the server in payload form. This data is returned in JSON form and parse back into a JavaScript object to you.
    ii.status: You get the HTTP code returned from the server.
    iii.statusText: HTTP status message returned by the server.
    iv.headers: All the headers are sent back by the server.
    v.config: original request configuration.
    vi.request: actual XMLHttpRequest object.
Error Object
You will get an error object if there will be a problem with the request. Promise will be rejected with an error object with the properties given
    i.message: Error message text. 
    ii.response: Response object (if received). 
    iii.request: Actual XMLHttpRequest object (when running in a browser). 
    iv.config: Original request configuration. 


*/
class MountingComp extends React.Component {
  constructor() {
    // console.log("constructor")
    super();
    this.state = { products: [] };
  }
  componentDidMount() {
    // console.log("mounting")
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({ products: res.data });
    });
  }
  static getDerviedStateFromProps() {
    // console.log("deried states using props")
  }

  render() {
    // console.log("rendering")
    return (
      <div>
        <h1 style={{textAlign:"center"}}>LifeCycle methods Mounting [3-12-24]</h1>
        <div style={{display:"flex" ,justifyContent:"center",gap:"10px", flexWrap:"wrap"}}>
          {this.state.products.map((a, b) => {
            return <ProductsCard data={a}/>;
          })}
        </div>
      </div>
    );
  }
}
export default MountingComp;
