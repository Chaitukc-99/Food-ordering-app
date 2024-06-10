
import FoodList from "./FoodList";
const RestaurantCategory = ({ data, show, setShowIndex }) => {


    const onButtonClicked = () => {
        setShowIndex();
    }

    return <div className="p-2 mx-auto my-3 w-6/12 shadow-lg">
        <div className="flex justify-between p-3" onClick={onButtonClicked}>
            <span >{data.title} ({data.itemCards.length})</span>
            <span>⬇</span>
        </div>

        <div>{show && <FoodList items={data.itemCards} />}
        </div>
    </div>
}


export default RestaurantCategory;

