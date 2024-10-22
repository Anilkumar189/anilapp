import React from 'react'
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Countries() {
    var [count,setCount]=React.useState([]);
    useEffect(()=>{
     fetch("https://restcountries.com/v3/all").then(res=>res.json()).then((data)=>{
     setCount([...data])
     })
    },[])
        
     return (
       <div>
         <h1>countries</h1>
          <div className='d-flex w-25' >
            <ul style={{overflowY:"scroll",height:"500px"}}>

          {
           count.map((c)=>{
             return <Link to={`Countriedetilse/${c.name.common}`}><li>{c.name.common}</li></Link>
           })
         }
            </ul>
           
        
          
         <div className='w-50'>

         <Outlet></Outlet>
           </div>
          </div>
           

        
          
      </div>
    
     )
}
