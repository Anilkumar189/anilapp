import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  var [t,setT]=React.useState(true)
function tr(){
    setT(!t)
}
  return (
    <div style={t?{backgroundColor:"white"}:{backgroundColor:"black"}}>
      <Navbar></Navbar>
<i  class={t?("bi bi-toggle-off fs-1"):("bi bi-toggle-on fs-1")}   onClick={()=>{tr()}} style={!t?{color:"blueviolet"}:{color:"black"}}></i>
      <Outlet></Outlet>
      <Footer></Footer>
        
    </div>
  );
}

export default App;
