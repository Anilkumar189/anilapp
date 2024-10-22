import React from 'react'
import { connect } from 'react-redux'
 function Todo({TodolistReducer:{todolist},dispatch}) {
    // console.log(props)
    
  return (
    <div>
      <h1>Todolist</h1>
      <input type="text"  id="d1"/>
      <button onClick={()=>{dispatch({type:"ADD-TODO",payload:document.getElementById("d1").value})}}>add todo</button>
      {
        todolist.map((t)=>{
            return <li>{t}</li>
        })
      }
    </div>
  )
  // 8498938888
}
export default connect((store)=>{return store})(Todo);