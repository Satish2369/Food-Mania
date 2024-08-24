
import React, { lazy,Suspense, useEffect } from "react"
import './App.css'
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Error from "./Components/Error.jsx";
import RestaurantMenu from "./Components/RestaurantMenu.jsx";
import Shimmer from "./Components/Shimmer.jsx";
// import Grocery from "./Components/Grocery.jsx";
import UserContext from "../utils/UserContext.jsx";
import {useState} from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.jsx";
import Cart from "./Components/Cart.jsx";
import Footer from "./Components/Footer.jsx";


const root = ReactDOM.createRoot(document.querySelector("#root"));




/*
chunking
lazy loading
code splitting 
on demand loading
Dynamic bundling 
 these all means the same breaking into componets


*/

const Grocery = lazy(()=>
  import( "./Components/Grocery.jsx")
)






const Applayout = ()=>{
 const [userName,setUserName] = useState();

  useEffect(()=>{
    //Make an api call and send username  and password
   const data= {
     name : "Satish mourya "
   };
 
   setUserName(data.name);
 },[])
 


  return(

    <Provider store={appStore}>
  <UserContext.Provider    value={{loggedInUser: userName}}>
  <div id="app" className="app">
      <Header/>
      <Outlet/>
      <Footer/>

  </div>
  </UserContext.Provider>
  </Provider>)
} 



const appRouter = createBrowserRouter([

  {
    path:"/",
    element:<Applayout/>,
    children:[
      {

        path:"/",
        element:<Body/>
      },
      {
      path:"/about",
      element: <About/>
    },
    {
    
      path:"/contact",
      element: <Contact/>
    
    },{
    
      path:"/grocery",
      element: (<Suspense fallback={<h1>Loading kr rahe ji</h1> }><Grocery/></Suspense>)
    
    },{

     path: "/restaurants/:resId",
     element:<RestaurantMenu/>



    },{
       path:"/cart",
      element:<Cart/>


    }
    

    ],
    errorElement:<Error/>
  },
  
  
  
  
  ])
  
   







root.render(<RouterProvider router={appRouter}/>);