import React from "react";
import ReactDOM from "react-dom/client";


const Header =() => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-leetuce-3624ld.png" alt="logo"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}


const RestaurantCard = (props) => {
    // const {resName, cuisine, rating, delTime} = props;
    const {resCard} =props;
    const {img, resName, cuisine, rating, delTime, cost} = resCard;
    return (
        <div className="res-card">
            {/* <img className="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1E7DtscFpZ5Fgz9tyTDHOiZSldAfJZFz2A&s"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <div className="rating">
                <p>{props.rating}</p>
                <p>{props.delTime}</p>
            </div>    */}
            <img className="res-logo" src={img}></img>
            <h3>{resName}</h3>
            <h3>{cuisine}</h3>
            <div className="rating">
                <p id="rate">{rating}</p>
                <p>{delTime}</p>
            </div>
            <div className="price">
                <p>Price: </p>
                <p>{resCard.cost}</p>
            </div>
        </div>
    )
}

const resList = [
    {
        id: 1,
        resName : "Bunny Foods",
        cuisine : "Biryani, South India",
        rating : "4.5 stars",
        delTime : "38 min",
        cost: "250.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1E7DtscFpZ5Fgz9tyTDHOiZSldAfJZFz2A&s",
    },
    {
        id: 2,
        resName : "KFC",
        cuisine : "Chicken, South India",
        rating : "4.6 stars",
        delTime : "25 min",
        cost: "350.00",
        img : "https://b.zmtcdn.com/data/pictures/chains/4/2800014/03930951272152d62dfc165ae8b63d7c.jpg?fit=around|750:500&crop=750:500;*,*",
    },
    {
        id: 3,
        resName : "Yummy Tummy",
        cuisine : "Biryani, South India",
        rating : "4.1 stars",
        delTime : "40 min",
        cost: "280.00",
        img : "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
    },
    {
        id: 4,
        resName : "Red Cherry",
        cuisine : "Pastry and cakes",
        rating : "4.7 stars",
        delTime : "20 min",
        cost: "650.00",
        img : "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg",
    },
    {
        id: 5,
        resName : "Master Chef",
        cuisine : "Biryani, South India",
        rating : "4.8 stars",
        delTime : "25 min",
        cost: "200.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s",
    },
    {
        id: 6,
        resName : "Bunny Foods",
        cuisine : "Biryani, South India",
        rating : "4.5 stars",
        delTime : "38 min",
        cost: "180.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1E7DtscFpZ5Fgz9tyTDHOiZSldAfJZFz2A&s",
    },
    {
        id: 7,
        resName : "KFC",
        cuisine : "Chicken, South India",
        rating : "4.6 stars",
        delTime : "25 min",
        cost: "450.00",
        img : "https://b.zmtcdn.com/data/pictures/chains/4/2800014/03930951272152d62dfc165ae8b63d7c.jpg?fit=around|750:500&crop=750:500;*,*",
    },
    {
        id: 8,
        resName : "Yummy Tummy",
        cuisine : "Biryani, South India",
        rating : "4.1 stars",
        delTime : "40 min",
        cost: "165.00",
        img : "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
    },
    {
        id: 9,
        resName : "Red Cherry",
        cuisine : "Pastry and cakes",
        rating : "4.7 stars",
        delTime : "20 min",
        cost: "99.00",
        img : "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg",
    },
    {
        id: 10,
        resName : "Master Chef",
        cuisine : "Biryani, South India",
        rating : "4.8 stars",
        delTime : "25 min",
        cost: "369.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s",
    },
    {
        id: 11,
        resName : "Bunny Foods",
        cuisine : "Biryani, South India",
        rating : "4.5 stars",
        delTime : "38 min",
        cost: "546.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1E7DtscFpZ5Fgz9tyTDHOiZSldAfJZFz2A&s",
    },
    {
        id: 12,
        resName : "KFC",
        cuisine : "Chicken, South India",
        rating : "4.6 stars",
        delTime : "25 min",
        cost: "354.00",
        img : "https://b.zmtcdn.com/data/pictures/chains/4/2800014/03930951272152d62dfc165ae8b63d7c.jpg?fit=around|750:500&crop=750:500;*,*",
    },
    {
        id: 13,
        resName : "Yummy Tummy",
        cuisine : "Biryani, South India",
        rating : "4.1 stars",
        delTime : "40 min",
        cost: "212.00",
        img : "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
    },
    {
        id: 14,
        resName : "Red Cherry",
        cuisine : "Pastry and cakes",
        rating : "4.7 stars",
        delTime : "20 min",
        cost: "123.00",
        img : "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg",
    },
    {
        id: 15,
        resName : "Master Chef",
        cuisine : "Biryani, South India",
        rating : "4.8 stars",
        delTime : "25 min",
        cost: "312.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s",
    },
    {
        id: 16,
        resName : "Bunny Foods",
        cuisine : "Biryani, South India",
        rating : "4.5 stars",
        delTime : "38 min",
        cost: "453.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1E7DtscFpZ5Fgz9tyTDHOiZSldAfJZFz2A&s",
    },
    {
        id: 17,
        resName : "KFC",
        cuisine : "Chicken, South India",
        rating : "4.6 stars",
        delTime : "25 min",
        cost: "545.00",
        img : "https://b.zmtcdn.com/data/pictures/chains/4/2800014/03930951272152d62dfc165ae8b63d7c.jpg?fit=around|750:500&crop=750:500;*,*",
    },
    {
        id: 18,
        resName : "Yummy Tummy",
        cuisine : "Biryani, South India",
        rating : "4.1 stars",
        delTime : "40 min",
        cost: "354.00",
        img : "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
    },
    {
        id: 19,
        resName : "Red Cherry",
        cuisine : "Pastry and cakes",
        rating : "4.7 stars",
        delTime : "20 min",
        cost: "432.00",
        img : "https://justbakedcake.com/wp-content/uploads/2020/09/Chocochip-pastry.jpg",
    },
    {
        id: 20,
        resName : "Master Chef",
        cuisine : "Biryani, South India",
        rating : "4.8 stars",
        delTime : "25 min",
        cost: "129.00",
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s",
    },
]

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {/* <RestaurantCard resName = "Bunny Foods" cuisine="Biryani, South India, Asia" rating="4.5 stars" delTime = "38 minutes"/>
                <RestaurantCard resName = "Crisps" cuisine="Cake, Pastry" rating="4.8 stars" delTime = "20 minutes"/> */}

                {/* <RestaurantCard resCard = {resList[0]}/>
                <RestaurantCard resCard = {resList[1]}/>
                <RestaurantCard resCard = {resList[2]}/>
                <RestaurantCard resCard = {resList[3]}/> */}

                {resList.map((restaurant) => (<RestaurantCard resCard={restaurant} key={restaurant.id}/>))}

            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);