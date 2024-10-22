import { products } from "./products"
var initialState={
allproducts:products,
cartItems:[]
}
function productReducer(state=initialState,action){
    if(action.type==='ADD-TO-CART'){
    return {...state,cartItems:[...state.cartItems,{...action.payload,count:1}]}
    }
    if(action.type==="INC-CART-ITEM-COUNT"){
        var cartItems = state.cartItems.map((ci)=>{
            if(action.payload===ci.id){
                ci.count++;

            }
            return ci;
        })
        return {...state,cartItems:[...cartItems]}
    }

    if(action.type==="DEC-CART-ITEM-COUNT"){
        var cartItems = state.cartItems.map((ci)=>{
            if(action.payload===ci.id){
                ci.count--;

            }
            return ci;
        })
        return {...state,cartItems:[...cartItems]}
    }

return state
}
export default productReducer