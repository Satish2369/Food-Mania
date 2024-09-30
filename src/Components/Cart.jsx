
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";
import { RxCross2 } from "react-icons/rx";

const Cart = () =>{
const dispatch = useDispatch();

const cartItems = useSelector((store)=> store.cart.items)
// console.log(cartItems)

const [OrderNow,SetOrderNow]=useState("Order Now");
const [BgColor,setBgColor] = useState("bg-blue-950")

const handleClearCart = ()=>{
    dispatch(clearCart())
}

const handleOrderClick = ()=>{
    
SetOrderNow("Ordered Successfully")
setBgColor("bg-green-600")


}





    return (

       <div className="text-center    m-5 p-5 h-fit  font-['Apercu_Pro_Light'] ">

        <h1 className="text-7xl font-bold text-blue-950">Cart</h1>

       {cartItems.length > 0 &&<>
        <button className="bg-black text-white p-3 m-4 rounded-md flex gap-3 justify-center items-center capitalize" onClick={handleClearCart}    >
        <RxCross2 />
        clear cart
            </button>
       
       </>}

            
        <div className="w-8/12 m-auto  flex justify-center items-center">

           
            {cartItems.length === 0 && < >
            <div className="flex flex-col">             
                <h1 className="text-4xl mt-[8%] text-blue-950">Cart is empty add some items to your cart       
                </h1>
                
               
         
                <div>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-2130356-1800917.png" alt="" />
                    
                </div> </div>

            </>
}
            


           <ItemList items={cartItems}/>



        </div>
        
        


        {cartItems.length > 0 && <>
         
       <div className="flex justify-center m-10">
                <button className="bg-blue-950 p-2 text-white px-3 rounded-md" onClick={handleOrderClick}  >{OrderNow}</button>
              
           </div>


       </>}

       


        </div>





    )

}

export default Cart;















