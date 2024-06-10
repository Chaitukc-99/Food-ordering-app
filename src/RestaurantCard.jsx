/* eslint-disable react-refresh/only-export-components */
const RestaurantCard = ({ resData }) => {
    const link2 = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";



    const { cloudinaryImageId,
        name,
        costForTwo,
        cuisines,
        avgRating,
        avgRatingString }
        = resData?.info




    return (

        <div className="p-5 m-5 w-[220px] bg-green-50 border-solid border border-green-200 hover:bg-green-700">
            <img className='rounded-lg' src={link2 + cloudinaryImageId} alt="Biryani" />
            <h3 className="font:bold text-lg py-2">{name}</h3>
            <h3 className="py-1"> {cuisines.join(" , ")}</h3>
            <h4>Cost : {costForTwo}</h4>

            <h4>Rating : {avgRatingString ? avgRatingString : avgRating}</h4>
            <h4>Cost : {costForTwo}</h4>
        </div>

    )

}
export const withRestaurantLabel = (RestaurantCard) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m:3 p:3">Opened</label>
                <RestaurantCard {...props} />
            </div>
        )
    };
}

export default RestaurantCard;