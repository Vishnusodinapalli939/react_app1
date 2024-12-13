import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function ListDetails(){
    // const[products,setProducts]=useState([]);
    // useEffect(()=>{
    //     axios.get('https://fakestoreapi.com/products').then((res)=>{
    //         console.log(res.data)
    //         setProducts(res.data);
    //     })
    // },[])
    const movies=[
        {
            id:1,
          "title": "Inception",
          "director": "Christopher Nolan",
          "year": 2010,
          "genre": "Science Fiction",
          "rating": 8.8
        },
        {
            id:2,
          "title": "The Shawshank Redemption",
          "director": "Frank Darabont",
          "year": 1994,
          "genre": "Drama",
          "rating": 9.3
        },
        {
            id:3,
          "title": "The Dark Knight",
          "director": "Christopher Nolan",
          "year": 2008,
          "genre": "Action",
          "rating": 9.0
        },
        {
            id:4,
          "title": "Forrest Gump",
          "director": "Robert Zemeckis",
          "year": 1994,
          "genre": "Drama",
          "rating": 8.8
        },
        {
            id:5,
          "title": "Parasite",
          "director": "Bong Joon-ho",
          "year": 2019,
          "genre": "Thriller",
          "rating": 8.6
        }
      ]
      console.log("hi")
      const {id}=useParams();
      console.log(id,"id")
      const movie=movies.find((a,b)=>a.id==id)
      console.log(movie,"find")
    return(
        <div>
           <h1>{movie.title}</h1>
        </div>
    )
}
export default ListDetails;