import React from 'react';

const ResCard = (props) => {
    const {resData} = props;
    // const url = {"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
    // resData?.info?.badgesV2?.cloudinaryImageId};
    // console.log(url);
    return(
        <div>
          <div className="card-cont"  style={{margin: 10, padding: 6}}>
            <img className="card-img" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                  resData?.info?.cloudinaryImageId}
            alt='no-img' />
            <h1 style={{fontSize: '18px'}}>{resData?.info?.name}</h1>
            <p>{resData?.info?.cuisines.join(", ")}</p>
          </div>
        </div>
    )
}

export default ResCard;