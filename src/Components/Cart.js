import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import ItemResCardsContainer from './ItemResCardsConatiner';
import { clearCart, removeItem } from '../Common/CartSlice';
import { IoMdClose } from 'react-icons/io';


const Cart = () => {
    const cartItems = useSelector((store) => store?.cart?.items);

    console.log('cart', cartItems.length);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const handleRemoveItem = (itm) => {
        console.log('Removing item', itm?.card?.info?.id)
        dispatch(removeItem(itm?.card?.info?.id));
    }

    return(
        <div className='flex justify-center'>
        <div className='w-6/12 text-center'>
            <h1 className="font-bold m-2 text-center">Cart</h1>
            {/* <button className='border-solid border-2 border-sky-500 mr-2'
            onClick={handleRemoveItem}
            >
                RemoveItem
            </button> */}
            <button className='border-solid border-2 border-sky-500'
            onClick={handleClearCart}
            >
                ClearCart
            </button>
            {cartItems.length === 0 &&
                <h1>No Items in your cart.. Add your cart Items now...</h1>
            }
            {cartItems?.map((itm, id) => (
                <div className='flex'>
                <ItemResCardsContainer key={id} item={itm}/>
                <div className='m-2 p-4'>
                <IoMdClose 
                    onClick={() => handleRemoveItem(itm)}
                    className='text-red-600 font-extrabold size-6'/>
                </div>
                </div>
            )
            )}
        </div>
        </div>
    )
};

export default Cart;