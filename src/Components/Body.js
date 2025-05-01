import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
const Body = () => {
    const [listOfRests, setListOfRests] = useState(resList);
    // const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const filteredRest = resList.filter((res) =>
            res.cuisine.toLowerCase().includes(searchText.toLowerCase().trim())
          );
          setListOfRests(filteredRest);
    }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = async () => {

    //     const apiUrl = 'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6896435&lng=83.0023634&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

    //     const data = await fetch(apiUrl);

    //     const json = await data.json();
    //     console.log(json);
    //     setListOfRests(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //     setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // }

    // if(listOfRests.length === 0) {
    //     // return <h1>loading...</h1>
    //     return <Shimmer/>
    // }

    // conditional rendering
    return listOfRests.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="serach-box" 
                        value={searchText} 
                        onChange={(e) => 
                        {const updatedText = e.target.value;    
                        setSearchText(updatedText);
                        console.log(updatedText);
                        }}/>

                    <button 
                        onClick={handleSearch}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {const filterdList = listOfRests.filter((res) => res.rating > 4.5);
                setListOfRests(filterdList);
                }}>Top rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRests.map((restaurant) => (<RestaurantCard resCard={restaurant} key={restaurant.id}/>))}
            </div>
        </div>
    )
}

export default Body;