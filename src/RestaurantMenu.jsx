/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";
import useResMenuData from "./useResMenuData";
import { useParams } from "react-router-dom";





const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null)
    const { resId } = useParams()
    const resMenu = useResMenuData(resId)


    if (resMenu === null) return <div>Loading..</div>;

    const { name,
        cuisines, costForTwoMessage } = resMenu?.cards[2]?.card?.card?.info


    const filteredMenu = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item =>
        (item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))

    console.log(filteredMenu)

    return (!(Array.isArray(filteredMenu))) ? (<div><h1>no data found</h1></div>) :


        (
            <div className="bg-gray-50 p-2 text-center">
                <h1 className="font-bold text-xl p-1 m-1">{name}</h1>
                <p className='m-2'>{cuisines.join(",")}- {costForTwoMessage}</p>
                {filteredMenu.map((category, index) =>
                    <RestaurantCategory key={index}
                        data={category.card.card}
                        show={index === showIndex ? true : false}
                        setShowIndex={() => { setShowIndex(index) }} />)
                }



            </div>
        )
}

export default RestaurantMenu;