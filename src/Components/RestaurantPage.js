import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemResCards from "./ItemResCards";

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
    const filter =  resData[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((itm) => 
    // console.log('ssdf', itm.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'));
        itm?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
    console.log('filter', filter);


    return(
        <div className="m-4 text-center">
            <h1>{resName?.name}</h1>
            <h3 className="mb-4">{resName?.cuisines.join(", ")}</h3>
            <ItemResCards item={filter} />           
        </div>
    )
}

export default RestaurantPage