import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRests, setListOfRests] = useState(resList);
    return (
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