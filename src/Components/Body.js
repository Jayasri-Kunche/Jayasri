import RestaurantCard from "./RestaurantCard";
// import { data } from "../utils/data";
import {api} from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const Body = () => {
    const isOnline = useOnline()
    const [data,setData] = useState([]);
    const [value,setValue] = useState("")
    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(api);
            const out = await res.json()
            // console.log(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setData(out.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        }
        fetchData()
    },[])
    if(isOnline === false) return <h1>Seems like you have no internet connection, please check it......</h1>
    return(data.length === 0) ? <Shimmer/> : ( 
        <div>
            <div>
                <button className="p-2 m-2 bg-green-300 rounded-lg" onClick={() => {
                    const res = data.filter(each => each.info.avgRating > 4.5)
                    setData(res);
                }}>Top Rated Restaurants</button>
            </div>
            <div>
                <input type = "text" className = "bg-gray-300" onChange={(e) => {
                    setValue(e.target.value)

                }}/>
                <button onClick={() => {
                         const res = data.filter(each => each.info.name.toUpperCase().includes(value.toUpperCase()))
                         setData(res)
                }} className="p-2 m-2 bg-green-300 rounded-lg">Search</button>
            </div>
        <div className = "flex flex-wrap">
            {data.map(each => <Link to = {'/menu/' + each.info.id}><RestaurantCard item = {each} key = {each.info.id}/></Link>)}
        </div>
        </div>
    )
}

export default Body;