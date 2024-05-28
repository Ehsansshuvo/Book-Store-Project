//import React from 'react'

import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const Home = () => {
    const [allbooks,setAllBooks]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:4000/allBook',{
        method:'GET',
        headers:{
            Accept:'application/form-data',
            'Content-type':'application/json'
        }
    })
    .then((responseData)=>responseData.json())
    .then((data)=>{
      setAllBooks(data);
      console.log(data);
    });
     },[]);
  return (
    <div className="all-books" style={{marginLeft: "auto", marginRight: "auto"}}>
      <h2 style={{color:"red",fontStyle:"underline"}}>Book Store</h2>
      <table style={{border: "2px solid" }}>
        <thead style={{borderTop:"2px solid", borderColor:"gainsboro"}}>
        <tr>
        <th>Book Name</th>
        <th>Author Name</th>
        <th>Published Year</th>
        <th>Action</th>
        </tr>
        </thead>
      <tbody>
      <tr> <td colSpan="4" style={{textAlign: 'right'}}><Link to='/books/create/'><button><span>Create</span></button></Link></td></tr>
      {
        allbooks.map((item,index)=>(
          <tr key={index} className="bookrow" style={{border: "2px solid" }}>
            <td style={{border: "2px solid"}}><p>{item.title}</p> </td>
            <td style={{border: "2px solid" }}><p>{item.author}</p> </td>
            <td style={{border: "2px solid" }}><p>{item.publishedYear}</p></td>
            <td style={{gap: "30px",border: "2px solid" }}>
              <Link to={`/books/details/${item._id}`}><button><span>Details</span></button></Link>
              <Link to={`/books/update/${item._id}`}><button><span>Update</span></button></Link>
              <Link to={`/books/delete/${item._id}`}><button><span>Delete</span></button></Link>
            </td>
          </tr>
        ))
      }
      </tbody>
      <tfoot></tfoot>
      </table>

    </div>
  )
}

export default Home
