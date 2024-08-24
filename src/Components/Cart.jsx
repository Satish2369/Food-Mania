
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () =>{
const dispatch = useDispatch();

const cartItems = useSelector((store)=> store.cart.items)
console.log(cartItems)


const handleClearCart = ()=>{
    dispatch(clearCart())
}



    return (

       <div className="text-center m-5 p-5 ">

        <h1 className="text-2xl font-bold">Cart</h1>
        
        <div className="w-8/12 m-auto">

           <button className="bg-black text-white p-2 m-4 rounded-md" onClick={handleClearCart}    >
            clear cart
            </button>
            
            {cartItems.length === 0 && <h1>Cart is Empty Add some Items to your cart</h1>}


           <ItemList items={cartItems}/>



        </div>
        
        
        </div>





    )

}

export default Cart;















