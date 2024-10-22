import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Form,
} from "react-router-dom";

import About from './About';
import Discription from './Discription';
import Home from './Home';
import Counter from './counter';
import Nanna from './nanna';
import Countries from './Countries';
import Countriedetilse from './Countriedetilse';
import Student from './Student';
import Formik2 from './Formik2';
import {Provider} from 'react-redux'
import store from './store/store';
import Cou from './Cou';
import Todolist from './Todolist';
import Todo from './Todo';
import Product from './Product';
import Cart from './Cart';




const router = createBrowserRouter([
  {
path: "/",
element:<App/>,
children:[
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/discription",
    element:<Discription/>
  },
   {
    path:"/todolist",
   element:<Nanna/>
   },
  {
    path:"/counter",
    element:<Counter/>
  },
  {
    path:"/Countries",
    element:<Countries></Countries>,
    children:[
      {
        path:"/Countries/Countriedetilse/:cname",
        element:<Countriedetilse></Countriedetilse>
      }
      ]
  },
  {
    path:"/form",
    element:<Student></Student>
  },
  {
    path:"/sd",
    element:<Formik2/>
  },
  {
    path:"/t",
    element:<Todolist></Todolist>
  },
  {
    path:"/c",
    element:<Cou></Cou>
  },
  {
    path:"/tr",
    element:<Todo></Todo>
  },
  {
    path:"/pro",
    element:<Product></Product>
  },
   {
    path:"/cart",
    element:<Cart></Cart>
   }
 
]
  },
   
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
