import CDN_URL from "../../utils/constants";

import reslist from "../../utils/mockdata";

const styleCard = {
    backgroundColor: "yellow"
}











 


const RestaurantCard =({resData})=>{
    
     const { name, cuisines, avgRating,costForTwo,sla,cloudinaryImageId } = resData.info;
     const deliveryTime = sla.deliveryTime;




    return <div className="flex flex-col w-[310px] p-4  m-4  h-[460px] rounded-lg shadow-lg"   style ={styleCard}>
    <img    className=" h-48 w-98 rounded-lg" 
       src={CDN_URL + cloudinaryImageId } alt="img" />
      <h3 className="text-center p-4 font-bold ">{name}</h3>
      <h4 className="text-center p-1 ">{cuisines.join(" , ")}</h4>
      <h4 className="text-center p-1">{avgRating} stars</h4>

<h4 className="text-center p-1">{costForTwo}</h4>
<h4 className="text-center p-1">Delivery Time : {deliveryTime}  mins  </h4>
 </div>
 
}

export default RestaurantCard;