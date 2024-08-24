

import { useDispatch } from "react-redux";
import CDN_URL from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";

const ItemList= ({items})=>{

// console.log(items);

const  dispatch = useDispatch();


 
const handleAddItem =(items) =>{

dispatch(addItem(items))

}




return <div className="">

{items.map((items)=> (
<div  key={items.card.info.id} className="px-4 m-2 border-b-2  text-left flex    justify-between ">


<div className="flex flex-col py-2   w-9/12">
    <span className="font-bold ">{items.card.info.name}</span>
    <span > ₹{items.card.info.price ? items.card.info.price/100 : 290 }</span>
    <p className="text-justify">{items.card.info.description}</p>
    </div>
   

<div className="w-3/12 p-4">

<div className="">
 
<button className="p-2 mx-14 bg-black shadow-lg text-white "  
onClick={()=>  handleAddItem(items)}


>Add +</button>
</div>
<img src={CDN_URL + items.card.info.imageId} className="w-full relative" />
</div>
</div>



))}


</div>




}

export default ItemList;