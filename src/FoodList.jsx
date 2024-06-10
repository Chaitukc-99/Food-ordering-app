import { useDispatch } from "react-redux";
import { addItem } from "./.utils/cartSlice";

const FoodList = ({ items }) => {
    const link = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

    const dispatch = useDispatch();
    const addButton = (item) => {
        dispatch(addItem(item));
    }
    return (<div>
        {items.map(item => (<div className="bg-slate-100 text-left p-3 border-gray-200 border-b-2 flex justify-between" key={item.card.info.id}>

            <div className="my-1 py-2 w-10/12">
                <div>{item.card.info.name}</div>
                <div className="text-sm py-1">Rs.{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</div>
                <p className="text-xs py-2">{item.card.info.description}</p>
            </div>

            <div className="w-2/12 p-2 hy-2 bg-green-100">
                <button className="absolute p-3 m-3 bg-white text-black rounded-lg shadow-lg" onClick={() => addButton(item)}>Add +</button>
                <img src={link + item.card.info.imageId} alt='image' />
            </div>

        </div>))}


    </div>)
}

export default FoodList