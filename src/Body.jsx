import { useEffect, useState } from "react";
import RestaurantCard, { withRestaurantLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { addItems } from "./.utils/resInfoSlice";
//import { addFilterItems } from "./.utils/filterResSlice";


const Body = () => {
    //const [restaurantList, setRestaurantList] = useState([]);
    //const [filteredList, setFilteredList] = useState([]);
    const [searchRes, setSearchRes] = useState('');
    const LabeledCards = withRestaurantLabel(RestaurantCard);

    const dispatch = useDispatch()
    const restaurantList = useSelector((store) => store.resInfo.items)
    //const filterRestaurantList = useSelector((store) => store.filterRes.items)


    // const [filteredList, setFilteredList] = useState(filterRestaurantList);

    // console.log(filteredList)



    /**  )*/
    /**console.log(`list : ${topRatedList}`)*/



    useEffect(() => {
        fetchData()
    }, []);
    /**  await has to be available inside  an async func   
     * we can get the api data using fetch func so for loading api data it will take some time so we have used an asynchronous func
     * here fetch func is used using await ,here await will assure a promise and promise will be resolved once api data is fetched
      
      */

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/api/seo/getListing?lat=17.4485835&lng=78.39080349999999");

        const json = await data.json();



        /**received error at first as tried to operate array methods on non array variable */
        //adding json data to the resInfo store

        dispatch(addItems(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        //dispatch(addFilterItems(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants));
        //setFilteredList(json?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // const handleSearch = () => {
    //     //console.log("button clicked")
    //     const searchedRes = restaurantList[0].filter((res) =>
    //         (res?.info?.name?.toLowerCase()?.includes(searchRes.toLowerCase())))

    //     setFilteredList(searchedRes)


    // }


    const status = useOnlineStatus()
    if (status === false) return (<div>you are offline ,try to check your internet connection</div>);

    return (restaurantList.length === 0) ? <div>Loading...</div> : (<>

        {/* <div className="flex">
            <div className="p-2 m-3">
                <input type='text' value={searchRes} onChange={(event) =>
                    setSearchRes(event.target.value)} placeholder="Enter restaurant name" className="border border-solid border-black"></input>
                <button className="px-1 border border-solid border-black  bg-green-600" onClick={handleSearch}>Search</button>
            </div>
        </div> */}
        {/*
            <div className="p-2 m-3">
                <button className="px-4 border-[2px] border-solid border-black bg-green-600" onClick={() => {
                    const topRatedList = restaurantList[0].filter((res) => (res.info.avgRating > 4));
                    
                }} > Top rated restaurants</button>
            </div>
            </div> */}

        <div className='flex flex-wrap bg-blue-50'>
            {restaurantList[0].map((res) =>

            //return (<h3>{res?.info?.name}</h3>

            (<><Link to={`/restaurants/${res?.info?.id}`} key={res?.info?.id}>
                {res?.info?.isOpen ? (<LabeledCards resData={res} />) : (<RestaurantCard resData={res} />)}
            </Link></>))


            }





        </div>

    </>)

}



export default Body;
