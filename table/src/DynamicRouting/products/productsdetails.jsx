import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductsCard from "../../bootstrap/card";
import Spinner from "react-bootstrap/esm/Spinner";
function ProductDetails() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data,"testing");
      setProducts(res.data);
    });
  },[]);
  console.log(products)
  const {id}=useParams();
  console.log(id)
  const data=products.find((a,b)=>a.id==id)
  console.log(data)
  if(!data){
    return(<Spinner/>)
  }
  return (
    <div>
      {/* <h1>{data.id}</h1> */}
      {/* <h1>hii</h1> */}
      <ProductsCard data={data}/>
    </div>
  );
}
export default ProductDetails;
