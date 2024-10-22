 import React, { useState } from 'react'
 import {Formik, useFormik} from "formik";
 import * as Yup from 'yup';
 export default function Student() {
  var [data,setData]=useState([])
  var St=useFormik({
    initialValues:{
      email:"",
      Name:'',
      phonenumber:"",
      age:"",
      password:"",
      gender:"",
      tech:""
      
    },
    validationSchema:Yup.object({
    email:Yup.string().min(5,"to small email").required("fill the data"),
    Name:Yup.string().min(3,"too small").required("fill the data"),
    phonenumber:Yup.string().max(10,"10 only").required("fill the data"),
    age:Yup.string().min(2,"verry small").required("fill the data"),
    password:Yup.string().min(4,"to small password").required("fill the data")
    
    }),
      onSubmit:((values)=>{
        console.log(values)
        setData([...data,values])
      })

       
  })


 
  

  // console.log(data)
  console.log(St)
   return (
    <div>
     <div id="d2" className='border border-success w-25 p-4'>
       <h1>Contact us</h1>
       <h6>plese let us know your intrest</h6>
       <hr />
       <form onSubmit={St.handleSubmit}>

       <i class="bi bi-envelope-fill" id="d4"></i>
        <input type="text"  id="d3" {...St.getFieldProps("email")} placeholder='Enter your email'/>
        <div className='text-danger'>{St.touched.email && St.errors.email}</div>
        <br />

       <i class="bi bi-person-fill" id="d4"></i>
        <input  type="text"  id="d3" {...St.getFieldProps("Name")} placeholder=' Enter your NAME'/>
       
        <div className='text-danger'>{St.touched.Name && St.errors.Name}</div>
        <br />
        <i class="bi bi-telephone-fill" id="d4"></i>
        <input type="number" id="d3" {...St.getFieldProps("phonenumber")} placeholder='phonenumber (Whatsapp)' />
        <div className='text-danger'>{St.touched.phonenumber && St.errors.phonenumber}</div>
        <br />
        <input type="number"  id="d3" {...St.getFieldProps("age")} placeholder=' Enter your age'/>
        <div className='text-danger'>{St.touched.age && St.errors.age}</div>
        <br />
        <input type="number"  id="d3" {...St.getFieldProps("password")} placeholder=' Enter your password'/>
        <div className='text-danger'>{St.touched.password && St.errors.password}</div>

        <br />
         
       
        <button style={{marginLeft:"110px",backgroundColor:"green"}}>submit</button>
        <br />

        
         
       </form>

     </div>
     <div style={{display:"flex",flexWrap:"wrap"}}>
     {
            data.map((e,i)=>{
              return <div style={{padding:"10px",margin:"10px",border:"2px solid",borderRadius:"10px,90px"}}>
                <h6>{e.email}</h6>
                <h6>{e.Name}</h6>
                <h6>{e.phonenumber}</h6>
                <h6>{e.age}</h6>
                <h6>{e.password}</h6>
                <button onClick={()=>(del(i))}>DELETE</button>
            
              </div>
                
                  
            })
          }
     </div>
     </div>
   )
function del(i){
  var temp=[...data]
  temp.splice(i,1)
  setData([...temp])
}
  
 }
 