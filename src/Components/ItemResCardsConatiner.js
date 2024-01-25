import React from 'react';
import { useDispatch } from "react-redux";
import { CloudImgId } from "../Common/utilities";
import {addItem} from '../Common/CartSlice';


const ItemResCardsContainer = (props) => {
    const {item} = props;
    const card = item?.card?.info;

    const dispatch = useDispatch();

    const handleAddCart = (item) => {
        dispatch(addItem(item));
    }

    return(
        <>
        <div className="flex justify-between w-full">
            <div>
                <h1 className="font-medium">{item?.card?.info?.name}</h1>
                <h4>₹ {item?.card?.info?.price? item?.card?.info?.price / 100: item?.card?.info?.defaultPrice /100}</h4>
                <p1 className='text-red-400'>{card?.description}</p1>
            </div>
            <div>
                <button 
                    className="w-12 absolute ml-2 bg-white text-green-400 rounded-md"
                    onClick={() => handleAddCart(item)} 
                >
                    Add
                </button>
                
                <img className="w-28 rounded-lg" src={CloudImgId + card?.imageId} alt=''/>
            </div>
        </div>
        <hr className="border-slate-200 my-2"/>
        </>
    )
}

export default ItemResCardsContainer