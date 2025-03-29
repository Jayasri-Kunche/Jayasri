import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import ItemList from "./ItemList";
import { useState } from "react";
const ResCate = (props) => {
    // console.log(props)
    const {itemCards, title} = props.item.card.card;
    const {showItem,setShowIndex} = props;
    // const [showItem, setShowItem] = useState(false)
    return (
        <div className="bg-gray-200 my-2 p-2 w-1/2 mx-auto">
            <div className="flex justify-between">
                <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                <span onClick={() => {
                    // setShowItem(!showItem)
                    setShowIndex()
                }} className="cursor-pointer">{showItem ? <FaArrowUp/> : <FaArrowDown/>}</span>
            </div>
            {showItem &&<ItemList items = {itemCards}/>}
           
        </div>
    )
}

export default ResCate;