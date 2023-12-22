import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
    const [resData, setResData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetchResDetails();
    },[]);

    const fetchResDetails = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId='
            + id);
        const json = await data.json();
        setResData(json?.data?.cards);
    }

    const menuDetails = resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    const resName = resData[0]?.card?.card?.info;
    console.log(resName);


    return(
        <div>
            <h1>{resName?.name}</h1>
            <h3>{resName?.cuisines.join(", ")}</h3>
            <h4>{resName?.costForTwoMessage}  ⭐{resName?.avgRating}</h4>
            <h1>MENU</h1>
            {menuDetails?.map((itm, id) => (
                <ul key={id}>
                    <li>{itm?.card?.info?.name}</li>
                </ul>
            ))}
        </div>
    )
}

export default RestaurantPage