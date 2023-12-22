import React, { useEffect, useState } from "react";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

const dataRes = [
    {
        info: {
            "id": "3324",
            "name": "Srikanya",
            "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
            "locality": "Punjagutta Road",
            "areaName": "Punjagutta",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Andhra",
                "Seafood"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "3324",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6700
            },
            "parentId": "7317",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-05 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
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
        analytics: {},
        cta: {
            "link": "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
            "type": "WEBLINK"
        }
    },
    {
        info: {
            "id": "3324",
            "name": "Srikanya",
            "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
            "locality": "Punjagutta Road",
            "areaName": "Punjagutta",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Andhra",
                "Seafood"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "3324",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6700
            },
            "parentId": "7317",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-05 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
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
        analytics: {},
        cta: {
            "link": "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
            "type": "WEBLINK"
        }
    },
    {
        info: {
            "id": "3324",
            "name": "Srikanya",
            "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
            "locality": "Punjagutta Road",
            "areaName": "Punjagutta",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Andhra",
                "Seafood"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "3324",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6700
            },
            "parentId": "7317",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-05 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
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
        analytics: {},
        cta: {
            "link": "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
            "type": "WEBLINK"
        }
    },
    {
        info: {
            "id": "3324",
            "name": "Srikanya",
            "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
            "locality": "Punjagutta Road",
            "areaName": "Punjagutta",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Andhra",
                "Seafood"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "3324",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6700
            },
            "parentId": "7317",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-05 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
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
        analytics: {},
        cta: {
            "link": "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
            "type": "WEBLINK"
        }
    },
    {
        info: {
            "id": "3324",
            "name": "Srikanya",
            "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
            "locality": "Punjagutta Road",
            "areaName": "Punjagutta",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Andhra",
                "Seafood"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "3324",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 6700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 6700
            },
            "parentId": "7317",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.8,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "6.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-12-05 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
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
        analytics: {},
        cta: {
            "link": "https://www.swiggy.com/restaurants/srikanya-road-punjagutta-hyderabad-3324",
            "type": "WEBLINK"
        }
    }
];



const Body = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [filters,setFilters] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    useEffect(() => {
        fetchData();
    },[]);

    useEffect(()=>{
        if(filters.length>0){

            filters.forEach(filter=>{
                const filterData = data.filter((itm) => itm.info?.name.toLowerCase().includes(searchText.toLowerCase()));
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
        const filter = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setData(filter);
        setFilteredData(filter);
    };

    const handleFilter = () => {
        
        setFilters([...filters, searchText]);
        const filterData = data.filter((itm) => itm.info?.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filterData);
        
    }

    const filterClickHandler = (filter) => {
        setFilters(prevFilters=>prevFilters.filter(each=>each!=filter));
        
    }

    return(
        <>
        {data.length === 0? (<>
        <h1>Loading.....</h1>
        </>
        ):
        (<div className="body-cont">
            <div style={{marginTop: 10, marginLeft: 10}}>
                
                <input type='text'value={searchText} placeholder="Search..."
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button 
                    onClick={handleFilter}
                >
                    Search
                </button>
                {
                    filters.length > 0 && filters.map((filter,id) => (
                        <p key={id} 
                        onClick={()=>filterClickHandler(filter)}>
                            {filter} <span style={{color:'red'}}>X</span>
                        </p>
                    ))
                }
            </div>
        <div style={{display: 'flex', flexWrap:'wrap'}}>
        {filteredData && filteredData?.map((res) => (
            <Link to={'/res/'+ res.info.id} key={res?.info?.id}>
            <ResCard resData={res}/>
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