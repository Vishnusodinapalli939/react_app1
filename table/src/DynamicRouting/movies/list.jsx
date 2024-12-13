import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ListData() {
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

  return (
    <div>
      <h1>hii</h1>
      <ul>
        {movies.map((a,b) => (
          <li key={b} ><Link className="link" to={`${a.id}`}>{a.title}</Link></li>
        ))}
      </ul>
    </div>
  );
}
export default ListData;
