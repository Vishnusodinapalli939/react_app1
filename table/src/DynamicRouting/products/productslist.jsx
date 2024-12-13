import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/esm/Spinner";
function ProductList(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
         axios.get("https://fakestoreapi.com/products").then((res) => {
              setProducts(res.data); 
            //   console.log(res.data);
            });
    },[])

    return(
    <div>
        {products.length>0?( <ul>
            {products.map((a,b)=>(
                <li key={b}><Link className="link" to={`${a.id}`}>{a.title}</Link></li>
            ))}
        </ul>):<Spinner/>}
       
    </div>
    )
}
export default ProductList;
