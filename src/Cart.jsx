import { useDispatch, useSelector } from "react-redux";
import FoodList from "./FoodList";
import { clearCart } from "./.utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)
    const dispatch = useDispatch();
    const onClearButton = () => {
        dispatch(clearCart())

    }

    return (
        <div className="text-center">
            <h1 className="p-2 m-2 font-bold text-xl">Cart</h1>
            <button className="p-3 m-3 bg-white font-bold text-black rounded-lg shadow-lg" onClick={onClearButton}>Clear Cart</button>
            {cartItems.length === 0 && <div className="font-bold text-lg p-2 m-2">Add items to your cart</div>}
            <div className="w-6/12 m-auto"><FoodList items={cartItems} /></div>
        </div>
    )
}

export default Cart;