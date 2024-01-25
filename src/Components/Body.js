import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../Common/UserContext";
import ResCard, { withPromotedLabel } from "./ResCard";


const mockData = {
    "info": {
        "id": "4138",
        "name": "Grand Hotel",
        "cloudinaryImageId": "g1arzw6qd7g9affkmgzk",
        "locality": "Banjara Hills",
        "areaName": "Abids",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Biryani",
            "Chinese",
            "Tandoor",
            "Haleem"
        ],
        "avgRating": 4.3,
        "parentId": "4001",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 21,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "21 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-01-22 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹120 OFF",
            "subHeader": "ABOVE ₹199",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
    },
    "analytics": {},
    "cta": {
        "link": "https://www.swiggy.com/restaurants/grand-hotel-banjara-hills-abids-hyderabad-4138",
        "type": "WEBLINK"
    }
}

const Body = () => {
    const [data, setData] = useState([mockData]);
    const [searchText, setSearchText] = useState('');
    const [filters,setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const {userName, setName} = useContext(UserContext);
    // const [name,setName] = useState(userName);


    useEffect(() => {
        fetchData();
    },[]);

    useEffect(()=>{
        if(filters.length>0){

            filters.forEach(filter=>{
                const filterData = data?.filter((itm) => itm?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredData(filterData);
            })
        }else{
            setFilteredData(data)
        }
    },[filters])
    
    console.log('sss', data);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        const filter = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(filter);
        setFilteredData(filter);
    };

    const handleFilter = () => {
        
        setFilters([...filters, searchText]);
        const filterData = data?.filter((itm) => itm?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filterData);
        
    }

    const filterClickHandler = (filter) => {
        setFilters(prevFilters=>prevFilters.filter(each=>each!=filter));
        
    }

    const ResPromotedCard = withPromotedLabel(ResCard);

    return(
        <>
        {false? (<>
        <h1>Loading.....</h1>
        </>
        ):
        (<div className="">
            <div>
            <input type='text' 
                value={userName}
                onChange={(e) => {
                    // setName(e.target.value);
                    setName(e.target.value);
                }}
            />
            </div>
            <div className="m-2 p-2">
                
                <input className="border-solid border-2 border-black-200 mr-2"
                     type='text'
                    data-testid='searchInput'
                     value={searchText} placeholder="Search..."
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="bg-sky-500 w-20"
                    onClick={handleFilter}
                >
                    Search
                </button>
                {/* {
                    filters.length > 0 && filters.map((filter,id) => (
                        <p key={id} 
                        onClick={()=>filterClickHandler(filter)}>
                            {filter} <span style={{color:'red'}}>X</span>
                        </p>
                    ))
                } */}
            </div>
        <div className="flex flex-wrap">
        {filteredData && filteredData?.map((res) => (
            <Link to={'/res/'+ res.info.id} key={res?.info?.id}>
                {res?.info?.aggregatedDiscountInfoV3?.header ? <ResPromotedCard resData={res}/>: <ResCard resData={res}/>}
            </Link>
        ))
        }
        </div>
        </div>)
        }
        </>
    )
}

export default Body;