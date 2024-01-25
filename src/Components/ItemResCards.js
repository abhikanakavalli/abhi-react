import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemResCardsContainer from "./ItemResCardsConatiner";

const ItemResCards = (props) => {
    let item = props;
    const [closed,setClosed] = useState([]);

    const handleAccordian = (id) => {
           if(closed.includes(id)){
            setClosed(closed.filter((card) =>card!=id));
           }else{
            setClosed([...closed,id])
           }
            
    }

    return(
        <>
            {item?.item?.map((res, id) => (
            <div key={id} 
                onClick={() => handleAccordian(id)}
                className="border-b-slate-100 shadow-md w-6/12 m-auto mb-5 text-left p-2">
                <div className="flex justify-between ">
                    <div className="">
                        <h1 className="mb-4 font-bold">{res?.card?.card?.title} ({res?.card?.card?.itemCards.length})</h1>
                    </div>
                    <div>
                        <button>{!closed.includes(id)? <IoIosArrowUp/>: <IoIosArrowDown />}</button>
                    </div>
                </div>
                {!closed.includes(id) &&
                <div>
                {res?.card?.card?.itemCards.map((itm, id) => (
                        <ItemResCardsContainer key={id} item= {itm}/>
                        
                    ))}
                
                </div>
                }
            </div>
            ))}

        </>
    )
}

export default ItemResCards;