//import React from 'react'
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const DeleteBook = () => {
  const {id}=useParams();
  useEffect(()=>{
    fetch(`http://localhost:4000/allBook/${id}`,{
      method:'DELETE',
      headers:{
          Accept:'application/form-data',
          'Content-type':'application/json'
      }
  })
  .then((responseData)=> responseData.json())
  .then((data)=>{
    if(data.success){
      alert("The book entry is deleted");
    }else{
      alert("no");
    }
    window.location.replace('/');
  })},[id]);
  return (
    <div>
      <h1>You are on the process of book deleting</h1>
    </div>
  )
}

export default DeleteBook;
