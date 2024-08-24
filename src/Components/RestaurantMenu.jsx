
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CDN_URL from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../Components/RestaurantCategory"
import {useState} from "react";
import { GiAlliedStar } from "react-icons/gi";

import { GiCurledLeaf } from "react-icons/gi";







const RestaurantMenu = ()=>{
const {resId} = useParams();
const resInfo = useRestaurantMenu(resId);

const [showIndex,setShowIndex] = useState(0);
 


if(resInfo === null) {
       return <Shimmer />;
     }


     const {
       name,
       cuisines,
       avgRatingString,
       costForTwoMessage,
       areaName,
       sla,
       totalRatingsString,
     } = resInfo?.cards[2]?.card?.card?.info || {};


const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);


 
 const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
 (c)=>
    c?.card?.card?.["@type"]===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)

// console.log(categories);


return (


       <div className="menu ">
        <div className="firstbox  ">
 <div className=" font-bold my-6 text-5xl  ">
<h1 className="text-center">{name}</h1>
</div> 

  <div className="border border-zinc-300  w-[40%]  m-[3%] ml-[30%] p-6 rounded-md">
    <div className=" flex  text-xl">
     <h3 className="flex items-center justify-center"> <GiAlliedStar />{avgRatingString} </h3>
     <h3>({totalRatingsString})</h3>
     <div>
           <div className="flex gap-1 justify-center items-center  ml-2">
           <div className="bg-orange-600 w-[5px] h-[5px] rounded-md"></div>
           <h3 className="ml-2">{costForTwoMessage}</h3> 


           </div>
         
        </div>
       
    </div>

   <div className="w-[90%] h-[5px] rounded-md bg-orange-500 mt-2 mb-2"></div>


    <h4 className=" text-orange-600">{cuisines.join(" , ")}</h4>

    <h4 className="">Outlet : {areaName}</h4>
     </div>

</div>


<div className="text-center text-5xl flex ml-[40%]">   <GiCurledLeaf /><GiCurledLeaf />-Menu -<GiCurledLeaf /><GiCurledLeaf /></div>



 
<div className="category">


{categories.map((category,index)=>(
  <RestaurantCategory 
  key={category?.card?.card?.title}  
  data={category?.card?.card }
  showItems={index === showIndex ? true:false}
  setShowIndex={() => setShowIndex(index)}
  />

)
)}

</div>




     
</div>

 







)









}

export default RestaurantMenu;