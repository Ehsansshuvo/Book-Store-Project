//import React from 'react'

import { useState,useEffect } from "react";
import { useParams } from "react-router-dom"

const ShowBook = () => {
  const [book,setBook]=useState({});
  const {id}=useParams();
  useEffect(()=>{
    fetch(`http://localhost:4000/allBook/${id}`,{
      method:'GET',
      headers:{
          Accept:'application/form-data',
          'Content-type':'application/json'
      }
  })
  .then((responseData)=>responseData.json())
  .then((data)=>
    setBook(data)
  );
   },[]);

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.publishedYear}</p>
      <p style={{borderStyle:"ridge", width:750, padding:20, lineHeight:1.5, textAlign:"justify" }}>{book.details}</p>
    </div>
  )
}

export default ShowBook;
