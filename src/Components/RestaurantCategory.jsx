import React, { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { PiDropSlashFill } from "react-icons/pi";
import ItemList from "./ItemList";



//acordion body
const RestaurantCategory = ({data,showItems,setShowIndex})=>{


const handleClick= () =>{
       setShowIndex();
}
 


return  (
<div>
<div className="w-8/12 bg-grey-50 shadow-lg p-4 mx-auto my-8    ">
      <div className="flex justify-between items-center cursor-pointer"  onClick={handleClick}>
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <IoChevronDownOutline className="ml-auto" />
      </div>

      { showItems && <ItemList items={data.itemCards}/>}

        </div>

       





        </div>
  );
};


export default RestaurantCategory;

