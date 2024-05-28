//import React from 'react'
import { useState } from "react";

const NewBook = () => {
  const [book,setBook]=useState({});
  const [title,setTitle] =useState("");  
  const [author,setAuthor] =useState("");  
  const [publishedYear,setPublishedYear] =useState("");  
   const [details,setDetails] =useState("");  
  const newBook=()=>{
    const newBooks={
      ...book,
      title:title,
      author:author,
      publishedYear:publishedYear,
      details:details
    };
    setBook(newBooks);
    return newBooks;
  }
   const buttonHandler=async()=>{
      const newBooks=newBook();
      console.log(newBook);
      await fetch(`http://localhost:4000/allBook`,{
        method:'POST',
        headers:{
          ACCEPT:'application/form-data',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(newBooks)
      }).then((responseData)=>responseData.json())
      .then((data)=>{
        console.log(data);
        if(confirm("Book is been updated\nDo you want to add another book?")){
            setBook({});
            setAuthor("");
            setTitle("");
            setPublishedYear("");
            setDetails("");
        }else{
          window.location.replace('/');
        }
        
      })
  }
  return (
    <div style={{display:"flex", flexDirection:"column",gap:10,alignItems:"center"}}>
    <h1>Add New Book</h1>
    <input style={{width:500}} placeholder="title" type="text" onChange={(event)=>setTitle(event.target.value)} value={title} required/>
     <input style={{width:500}} placeholder="author" type="text" onChange={(event)=>setAuthor(event.target.value)} value={author} required/>
      <input style={{width:500}} placeholder="publishedYear" type="number" onChange={(event)=>setPublishedYear(event.target.value)} value={publishedYear} required />
       <textarea style={{width:500}} placeholder="details" type="text" onChange={(event)=>setDetails(event.target.value)} value={details} required/>
       <button onClick={()=>{ buttonHandler(); }} >Add</button>
  </div>
  )
}

export default NewBook
