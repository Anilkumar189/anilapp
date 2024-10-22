import React from 'react'
import { connect } from 'react-redux'
 function Product({productReducer:{allproducts,cartItems},dispatch}) {
  return (
    <div>
      <h1>products</h1>
      <div className='d-flex flex-wrap'>
      {
        allproducts.map((p)=>{
          return <div className="card p-2 m-2" style={{width: "18rem"}}>
          <img src={p.image} className="card-img-top" alt="" style={{height:"200px"}}/>
          <div className="card-body">
            <h5 className="card-title">{p.title.slice(0,20)}</h5>
            <p className="card-text">{p.description.slice(0,50)}</p>
            {
              
              cartItems.some(function(citem){
                if(citem.id===p.id){
                  return true
                }
          })?<button className="btn btn-warning">Go TO CART</button>:<button className="btn btn-primary" onClick={()=>{dispatch({type:'ADD-TO-CART',payload:p})}}>ADD TO CART</button>
          
        }

          </div>
        </div>
        })
      }
    </div>
    </div>
  )
}
export default connect(store=>store)(Product)