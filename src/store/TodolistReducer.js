import React from 'react'
var initialstate={
  todolist:["get bmw","go to goa","goto gmd","drm"]
}
function TodolistReducer(state=initialstate,action) {
  if(action.type=='ADD-TODO'){
    return {...state,todolist:[...state.todolist,action.payload]}
  }
  return  state
}

export default TodolistReducer
