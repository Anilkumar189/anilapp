 
var initialstate={
    c:0
};
function counterReducer(state=initialstate,action){
    if(action.type==="INC"){
        return {...state,c:state.c+1}
    }
    if(action.type==="DEC"){
        return {...state,c:state.c-1}
    } 
    if(action.type==="RES"){
        return {...state,c:state.c=0}
    }
    return state
}
export default counterReducer