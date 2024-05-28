//import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  const [book,setBook]=useState({});
  const [title,setTitle] =useState("");  
  const [author,setAuthor] =useState("");  
  const [publishedYear,setPublishedYear] =useState("");  
   const [details,setDetails] =useState("");  
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
  .then((data)=>{
    setBook(data);
    setTitle(data.title);
    setPublishedYear(data.publishedYear);
    setAuthor(data.author);
    setDetails(data.details);
  }
  );
   },[]);
   const updateTheBook=()=>{
    const upBook={
      ...book,
      title: title,
      author: author,
     publishedYear:publishedYear,
     details: details
    };
    setBook(upBook);
    return upBook;
   }
  const buttonHandler=async()=>{
    const upBook=updateTheBook();
    console.log(upBook);
    await fetch(`http://localhost:4000/allBook/${id}`,{
      method:'PUT',
      headers:{
        Accept:'application/form-data',
        'Content-type':'application/json'
      },
      body:JSON.stringify(upBook)
    }).then((responseData)=>responseData.json())
    .then((data)=>{
      if(data.success){
        alert("Here,we are!");
      }
        window.location.replace('/');
    })
  };


  return (
    <div style={{display:"flex", flexDirection:"column",gap:10,alignItems:"center"}}>
      <h1>Book Update</h1>
      <input style={{width:500}} type="text" onChange={(event)=>setTitle(event.target.value)} value={title}/>
       <input style={{width:500}} type="text" onChange={(event)=>setAuthor(event.target.value)} value={author}/>
        <input style={{width:500}} type="number" onChange={(event)=>setPublishedYear(event.target.value)} value={publishedYear}/>
         <textarea style={{width:500}} type="text" onChange={(event)=>setDetails(event.target.value)} value={details} />
         <button onClick={()=>{ buttonHandler(); }}>Update</button>
    </div>
  )
}

export default UpdateBook
