import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemResCardsContainer from "./ItemResCardsConatiner";

const ItemResCards = (props) => {
    const [isExpand, setIsExpand] = useState(false);
    const item = props;

    console.log('Item', item);

    const handleAccordian = (id, item) => {
            item.card.card.isExpands = isExpand? false : true;
            console.log('dfg', item.card.card);
        setIsExpand((isExpands) => isExpand? false: true);
    }


    return(
        <>
            {item?.item?.map((res, id) => (
            <div key={id} className="border-b-slate-100 shadow-md w-6/12 m-auto mb-5 text-left p-2">
                <div className="flex justify-between ">
                    <div className="">
                        <h1 className="mb-4 font-bold">{res?.card?.card?.title} ({res?.card?.card?.itemCards.length})</h1>
                    </div>
                    <div>
                        <button onClick={() => handleAccordian(id, res)}>{res.card.card.isExpands? <IoIosArrowUp/>: <IoIosArrowDown />}</button>
                    </div>
                </div>
                {res.card.card.isExpands ? 
                <div>
                {res?.card?.card?.itemCards.map((itm, id) => (
                        <ItemResCardsContainer key={id} item= {itm}/>
                        
                    ))}
                
                </div>: ''
                }
            </div>
            ))}

        </>
    )
}

export default ItemResCards;