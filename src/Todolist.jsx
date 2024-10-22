import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
export default function Todolist() {
    var [t,setT]=useState(["jhgejgj","hjhgjgrjktg","hguhgugg","gyuuyy"])
    var rf=React.useRef()
    var nrf=React.useRef()
    React.useEffect(()=>{
    rf.current.focus()
    },[])
  function che(f){
if(f.key==="Enter"){
    nrf.current.focus()
}
  }

  return (
    <div>
        <input type="text" name="" id="d1" ref={rf} onKeyUp={(f)=>{che(f)}}/>
        <button onClick={()=>{add()}} ref={nrf}>add todo</button>

        
        {
            t.map((e,i)=>{
                return <div>
                
                <li>{e}<button onClick={()=>{de(i)}}>delete</button>
                
                </li>
                </div>
            })
        }

    </div>
  )
 function add(){
    var x=document.getElementById("d1").value ;
    setT([...t,x])
 }
 function de(i){
  var temp=([...t])
  temp.splice(i,1)
  setT([...temp])
 

  }
 
}
