import { connect } from 'react-redux'
import React from 'react'

 function Cou({counterReducer:{c},dispatch}) {
    // console.log(props)
  return (
    <div>
      <h1>COUNTER:{c}</h1>
   <button onClick={()=>{dispatch({type:"INC"})}}>increment</button>
   <button onClick={()=>{dispatch({type:"DEC"})}}>decrement</button>
   <button onClick={()=>{dispatch({type:"RES"})}}>reset</button>
    </div>
  )
}
export default connect((store)=>{return store})(Cou)