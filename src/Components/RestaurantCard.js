import { BsFillStarFill } from "react-icons/bs";
import { img_url } from "../utils/constants";

const RestaurantCard = (props) => {
    // console.log(props) 
    const {name,avgRating, areaName,cuisines, cloudinaryImageId,costForTwo} = props.item.info;
    return (
        <div className="h-[360px] w-[250px] bg-gray-300 rounded-xl p-4 m-4 hover:bg-lime-300">
            <img className ="h-[150px] w-[250px] rounded-xl"  src = {img_url + cloudinaryImageId}  alt = "logo"/>
            <h1 className="font-bold text-xl">{name}</h1>
            <p className="flex">{avgRating} <BsFillStarFill/>Rating</p>
            <p>{cuisines[0]}</p>
            <p>{costForTwo}</p>
            <p>{areaName}</p>
          
        </div>
    )
}

export default RestaurantCard;