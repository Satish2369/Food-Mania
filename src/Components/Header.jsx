import { useState,useContext} from "react";
import  {Link} from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";


const Header = ()=>{

const [btnNameReact,setBtnNameReact] = useState("login");
const onlineStatus = useOnlineStatus();

const { loggedInUser } = useContext(UserContext);
  // console.log(data);

// subscribing to the store using a selector 
const cartItems = useSelector((store)=>store.cart.items)


console.log(cartItems);








    return (
    <div className="flex  justify-between bg-orange-500 p-1 shadow-lg">
         <div className="flex"> 
             <img src="./utils/foodmania.png" className="w-36" alt="" />
               <h5 className="py-8 m-4 capitalize text-4xl">Food Mania</h5>
         </div>
         <div className="nav-items">
           <ul className="flex gap-8  m-12 align-middle font-bold uppercase text-xl">
            {/* <li>Online Status:{onlineStatus ? "online" : "offline"}</li> */}
           <li><Link to="/">Home</Link></li>
           <li>
            <Link to="/about">About Us</Link>
           </li>
           <li>
            <Link to="/contact">Contact us</Link>
           </li>
           {/* <li>
            <Link to="/grocery">Grocery</Link>
           </li> */}
            <li className="px-2 font-bold ">

              <Link to="/cart" className="flex">  <BsCart /> <sup className="text-blue-500">{cartItems.length}</sup></Link>
            
                
                
                </li>
            
{/*            
           <li>
            { loggedInUser }
           </li>
            */}
           <button 
           className="login-button" onClick={()=>{
            setBtnNameReact((prevName) => (prevName === "login" ? "logout" : "login"));
            // setBtnNameReact("logout");
          }
      
          }>{btnNameReact}
          </button>
 
 </ul>
         
 
 
         </div>
 
 
     </div>)
 
 }

 export default Header;