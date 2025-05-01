import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from './Shimmer';
const Body = () => {
    const [listOfRests, setListOfRests] = useState(resList);

    // useEffect(() => {
    //     fetchData();
    // },[]);

    // const fetchData = async () => {
    //     // const corsProxy = 'https://corsproxy.io/?';
    //     // const apiUrl = 'http://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6896435&lng=83.0023634&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

    //     // const data = await fetch(corsProxy + encodeURIComponent(apiUrl));

    //     const data = await fetch('url') //dont hv a proper public url so working with mockdata

    //     const json = await data.json();
    //     console.log(json);
    //     setListOfRests(json.data.cards[2].data.data.cards);
    // }

    // if(listOfRests.length === 0) {
    //     // return <h1>loading...</h1>
    //     return <Shimmer/>
    // }

    // conditional rendering
    return listOfRests.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {const filterdList = listOfRests.filter((res) => res.rating > 4.5);
                setListOfRests(filterdList);
                }}>Top rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRests.map((restaurant) => (<RestaurantCard resCard={restaurant} key={restaurant.id}/>))}
            </div>
        </div>
    )
}

export default Body;