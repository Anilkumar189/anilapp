import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
 function Navbar({productReducer:{cartItems}}) {
  return (
    
<nav class="nav bg-info justify-content-starting  sticky-top">
  <Link class="nav-link active text-secondary " aria-current="page" to="/">Home</Link>
  <Link class="nav-link text-secondary" to="/about">about</Link>
  <Link class="nav-link text-secondary" to="/discription">discription</Link>
  <Link class="nav-link text-secondary" to="/todolist">todolist</Link>
  <Link class="nav-link text-secondary" to="/counter">counter</Link>
  <Link class="nav-link text-secondary" to="/Countries">countries</Link>
  <Link class="nav-link text-secondary" to="/form">Register</Link>
  <Link class="nav-link text-secondary" to="/sd">form</Link>
  <Link class="nav-link text-secondary" to="/t">TODO</Link>
  <Link class="nav-link text-secondary" to="/c">Counter-redux</Link>
  <Link class="nav-link text-secondary" to="/tr">todolist-redux</Link>
  <Link class="nav-link text-secondary" to="/pro">products</Link>
  

  <Link class="nav-link text-secondary" to="/cart"> 
  <button type="button" class="btn btn-primary position-relative">
  <i class="bi bi-cart"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {
    cartItems.length
  }
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
  </Link>





  
 


</nav>
  
  )
}
export default connect(store=>store)(Navbar)