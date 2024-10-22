import React from 'react'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup';
import { useState } from 'react';
export default function Formik2() {

  // fetch("http://localhost:3000/products").then((res)=>{
  //   res.json().then((data)=>{

  //   })
  // })
  return (
    <div>
        <h1>Countact Us</h1>
        <Formik initialValues={{
          email:"",
          name:"",
          phonenumber:"",
          remarks:""
        }}
        validationSchema={Yup.object({
          email:Yup.string().min(4,"very small").required("fill the data"),
          name:Yup.string().min(3,"very small").required("fill the data"),
          phonenumber:Yup.string().min(10,"very small").required("fill the data"),

          remarks:Yup.string().min(20,"very small").required("fill the data")
          
        })}
        onSubmit={(values)=>{
          // fetch("http://localhost:3000/products",{
          //   method:"post",
          //   body:JSON.stringfiy(values)
          // })
        
        }}
        >
 {({ isSubmitting }) => (
                    <Form>
                         <div>
                           <h6>email:</h6>
                          <Field type="email" name="email"/>
                          <ErrorMessage name="email" component="div" />
                         </div>
                          <br />
                          <div>
                           <h6>Name</h6>
                          <Field type="name" name="name" />
                          <ErrorMessage name="name" component="div" />
                          </div>
                          <br />
                          <div>
                           <h6>phonenumber (whatsapp)</h6>
                          <Field type="number" name="phonenumber" />
                          <ErrorMessage name="phonenumber" component="div" />
                          </div>
                          <br />
                          <div>
                           <h6>Remarks:</h6>
                          <Field type="remarks" name="remarks" />
                          <ErrorMessage name="remarks" component="div" />
                          <br />
                          </div>
                          <button>Submit</button>
                    </Form>
      
    )}
        </Formik>
      
    </div>
    
  )
  
}
