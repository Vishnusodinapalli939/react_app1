/*
useMemo Hook :
  --The useMemo hook memoizes the return value of an expensive calculation between renders.
  --Memoizing means storing the value as a cached value so that the value need not be calculated again
  --useMemo is a hook used for optimising the performance of your renders. Normally, when you declare a variable inside a component, 
    it gets re-created on every render.

useCallback Hook :
  --it memoizes a callback function and returns it.
  --useMemo caches the functions return value so that the function need not execute again. 



*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EffectComp() {
  const [count, setCount] = useState(0); // Total items in the cart
  const [products, setProducts] = useState([]); // List of products
//   const [msg, setMsg] = useState("hii");

  // Fetch products when the component mounts or when `msg` changes
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data); // Set products directly as an array
      console.log(res.data);
    });
  }, []);

  // Add to cart handler
  const handleAddToCart = () => {
    setCount(count + 1); // Increment the cart count
  };

  return (
    <div>
      <h1>Total Items in Cart: {count}</h1>
      {/* <h1>{msg}</h1> */}
      {/* <button onClick={() => setMsg(msg + 1)}>Update Msg</button> */}
      
      {/* <h2>Products:</h2> */}
      
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"15px"}}>
        {products.map((product) => (
          <Products data={product} count={handleAddToCart}/>
        ))}
       
      </div>
    </div>
  );
}

function Products(props) {
    // {console.log(props)}
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.image} />
      <Card.Body style={{overflowY:"scroll",height:"150px"}}>
        <Card.Title>{props.data.title}</Card.Title>
        <Card.Text >
         {props.data.description}
        </Card.Text>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <Card.Text>Price:
         {props.data.price}
        </Card.Text>
        <Card.Text>Rating:
         {props.data.rating.rate}
        </Card.Text>
        </div>
     
      </Card.Body>
      <Card.Footer className="text-muted" style={{display:"flex",justifyContent:"space-between"}}>
      <Button variant="primary" onClick={props.count}>Addto cart</Button>
        <Button variant="primary">{props.data.category}</Button>
      
      </Card.Footer>
    </Card>
  );
}

export default EffectComp;
