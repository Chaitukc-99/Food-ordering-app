import UserContext from "./.utils/UserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
    //const [btnName, setBtnName] = useState("Login");
    const { defaultUser } = useContext(UserContext);
    const status = useOnlineStatus();
    //subscribing to the store using selector,this action is also reading the data from store
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems)
    return (
        <div className="flex justify-between border-2 border-orange-950 rounded-sm">

            <img className="h-[150px] w-1/12" alt="food logo" src="https://as1.ftcdn.net/v2/jpg/03/10/96/76/1000_F_310967666_UQQXS1Tts9wak3hJkeLCgwZYIbCBK6Tf.jpg" />

            <div className="bg-green-50 w-6/12">
                <ul className="flex p-5 m-3 justify-evenly text-left">
                    <li className="px-2 mt-3">Status :{status ? "🟩Available" : "🟥Offline"} </li>
                    <li className="px-2 mt-3"><Link to='/'>Home</Link></li>
                    <li className="px-2 mt-3"><Link to='/login'>Login</Link></li>
                    <li className="px-2 mt-3">{defaultUser}</li>
                    <li className="px-2 font-bold mt-3"><Link to='/cart'>{cartItems.length === 0 ? <span>Cart</span> : <span>Cart ({cartItems.length})</span>}</Link></li>
                    {/**<button className="logButton" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>**/}
                </ul>
            </div>
        </div>
    )
}

export default Header;