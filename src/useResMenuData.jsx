import { useEffect } from "react";
import { useState } from "react";

/**we are creating a custom hook here to get the fetching data logic for the restaurant menu */
const useResMenuData = (resId) => {

    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        getResMenu()
    }, [])




    const getResMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=" + resId);
        const json = await data.json()
        setResMenu(json?.data)


    }
    return resMenu;
}

export default useResMenuData;