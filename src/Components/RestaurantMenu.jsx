
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import CDN_URL from "../../utils/constants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "../Components/RestaurantCategory"
import {useState} from "react";










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


       <div className="menu text-center">
        <div className="firstbox  ">
 <div className=" font-bold my-6 text-2xl ">
<h1 >{name}</h1>
</div> 

  <div className="">
    <div className="">
     <h3> {avgRatingString} stars</h3>
     <h3>{totalRatingsString}</h3>
     <div>
        <h3>{costForTwoMessage}</h3> 
        </div>
       
    </div>

    <h4>{cuisines.join(" , ")}</h4>

    <h4>Outlet : {areaName}</h4>
     </div>

</div>
 
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