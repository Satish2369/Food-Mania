import RestaurantCard
 from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = ()=> {


const [listOfRestaurant,setListOfRestaurant] = useState([]);
const[filteredRestaurant,setFilteredRestaurant]=useState([] )

const[searchText,setSearchText] = useState("");

useEffect(()=>{
      fetchData();
},[])

const fetchData = async ()=>{
const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.32750&lng=78.03250&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json = await data.json();

// console.log(json);

setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

const onlineStatus = useOnlineStatus();


if(onlineStatus===false) return (<h1>Looks like you are  offline!! Please check your Internet Connection</h1>)


//conditional rendering 
// if(listOfRestaurant.length===0){~
//        return <Shimmer/>
// }



// console.log(listOfRestaurant);




    return listOfRestaurant.length === 0 ?(<Shimmer/>):(
     <div className="body">



      <div className="filter flex">
       
     <div className="search  m-4 p-4">

         <input   type="text" className="search-box border-2 outline-1" value={searchText}  onChange={(e)=>{ 
            setSearchText(e.target.value)
         }} />
        <button className="search-button border-2 bg-yellow-200 px-4"
        onClick={()=>{
            //filter logic here
            console.log(searchText);
            const filteredRestaurant = listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
            setFilteredRestaurant(filteredRestaurant);
        }}
        
        
        >Search</button>


     </div>




       
<button className="filter-btn  w-48 h-7 my-8 border-pink-200 bg-pink-400 "  onClick={()=>{
const filteredList = listOfRestaurant.filter((res)=> res.info.avgRating >4.3);

setFilteredRestaurant(filteredList);
console.log(filteredList)
}
}  
       
       >Top Rated Restaurant </button>
      
      
      
      
      
      </div>
      <div className="res-container flex flex-wrap mx-[36px] ">
   
             {
                
    //reslist.map((restaurant,index) => <RestaurantCard key={index} resData={restaurant}/>)  // bad practise


filteredRestaurant.map((restaurant) => 
<Link  key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.info?.id}> <RestaurantCard  resData={restaurant}/></Link>)


             }
 
      </div>
       </div>
    )
}



export default Body;
