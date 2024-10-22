import React from 'react'
import { connect } from 'react-redux';


 function Cart({productReducer:{cartItems},dispatch}) {
  // console.log(cartItems)

  return (
    <div>
      <table className='container'>
        <thead>
          <tr>
            <th>Title</th>
            <th>price</th>
            <th>volue</th>
            <th>Item total price</th>
          </tr>
           
        </thead>
        
              <tbody>
              {
                  cartItems.map((ci)=>{
                    return <tr>
                      <td>{ci.title}</td>
                      <td>{ci.price}</td>
                      <td>
                        <button className='btn btn-secondary'>-</button><b className='p-2'>{ci.count}</b><button className='btn btn-primary' onClick={()=>{dispatch({type:"INC-CART-ITEM-COUNT",payload:ci.id})}}>+</button>

                      </td>
                      <td className='text-end'>{ci.price*ci.count}</td>
                      
                    </tr>
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <th  colSpan={4}className='bg-success text-end'>Total:{cartItems.reduce((a,b)=>{ return a+(b.price*b.count)},0)}</th>
                </tr>
              </tfoot>
              
          
        
      </table>
    </div>
  )
}
export default connect(store=>store)(Cart)