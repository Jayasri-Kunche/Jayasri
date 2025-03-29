import { img_url } from "../utils/constants";
const ItemList = (props) => {
    // console.log(props)
    const {items} = props;
    return (
        <div>
           {items.map(item => (
            <div className="border-green-200 border-b-4 p-2 m-2 flex justify-between text-left">
                <div className="w-9/12">
                   <div className="py-2"> 
                       <span>{item.card.info.name}</span> 
                       <span>💰{item.card.info.price/100}</span>
                     </div>
                     <p>{item.card.info.description}</p>
                </div>
                <div className="w-3/12">
                <button className="bg-black text-white rounded-xl mx-2 p-2 absolute">Add+</button>
                {item.card.info.imageId && <img src = {img_url + item.card.info.imageId} className="h-[130px] w-[170px] rounded-2xl" />}
                </div>
            </div>
           ))}
        </div>
    )
}

export default ItemList;