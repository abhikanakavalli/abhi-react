import { CloudImgId } from "./Common/utilities";

const ItemResCardsContainer = (props) => {
    const {item} = props;
    const card = item?.card?.info;
    console.log('ssde', item);
    return(
        <>
        <div className="flex justify-between w-full">
            <div>
                <h1 className="font-medium">{item.card?.info.name}</h1>
                <h4>₹ {item.card?.info.price? item.card?.info.price / 100: item.card?.info?.defaultPrice /100}</h4>
                <p5 className='text-red-400'>{card?.description}</p5>
            </div>
            <div>
                <button className="w-12 absolute mt-2 ml-8 bg-white text-green-400 rounded-md">
                    Add
                </button>
                
                <img className="w-28 rounded-lg" src={CloudImgId + card.imageId} alt=''/>
            </div>
        </div>
        <hr className="border-slate-200 my-2"/>
        </>
    )
}

export default ItemResCardsContainer