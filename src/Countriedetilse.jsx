import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
 function Countriedetilse() {
   var x= useParams();
   var [details,setDetails]=useState({})
useEffect(()=>{
  fetch(`https://restcountries.com/v3/name/${x.cname}`).then(res=>res.json()).then(data=>{
setDetails(data[0]);
  })
},[x.cname])
  return (
    <div>
    

      <h1> countriename:{x.cname}</h1>
      <h2>population:{details.population}</h2>
      {/* <img src={details.flags[0]} alt=""/> */}
  
    
      
    </div>
  )
}
export default Countriedetilse;
