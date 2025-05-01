const RestaurantCard = (props) => {
    // const {resName, cuisine, rating, delTime} = props;
    const {resCard} =props;
    const {img, name, cuisine, rating, deliveryTime, cost} = resCard;
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
            <h3>{name}</h3>
            <h3>{cuisine}</h3>
            <div className="rating">
                <p id="rate">{rating} stars</p>
                <p>{deliveryTime}</p>
            </div>
            <div className="price">
                <p>Price: </p>
                <p>{cost}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;