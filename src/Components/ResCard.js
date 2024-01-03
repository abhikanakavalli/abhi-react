import React from 'react';

const ResCard = (props) => {
    const {resData} = props;
    // const url = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
    // resData?.info?.badgesV2?.cloudinaryImageId};
    // console.log(url);
    return(
        <div className=''>
          <div className="h-96 m-2 p-1 rounded-lg border-solid border-2 border-black-100 w-40 bg-orange-100 hover:bg-orange-200">
            <img className="w-40 rounded-lg" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                  resData?.info?.cloudinaryImageId}
            alt='no-img' />
            <h1 className='font-bold'>{resData?.info?.name}</h1>
            <p className='font-thin'>{resData?.info?.cuisines.join(", ")}</p>
            <h4>{resData?.info?.avgRating} ⭐</h4>
            <h3>{resData?.info?.costForTwo}</h3>
            <h4>{resData?.info?.sla?.deliveryTime} minutes</h4>
          </div>
        </div>
    )
}

export const withPromotedLabel = (ResCard) => {
  return (props) => {
    const {resData} = props;

    return(
      <div>
        <label className='absolute bg-black text-white m-1 p-1 rounded-lg'>
          {resData?.info?.aggregatedDiscountInfoV3?.header}
        </label>
        <ResCard {...props}/>
      </div>
    )
  }
};

export default ResCard;