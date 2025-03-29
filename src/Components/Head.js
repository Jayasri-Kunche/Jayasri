import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import useOnline from "../utils/useOnline";
const Head = () => {
   const isOnline =  useOnline()
    return (
        <div className="flex justify-between bg-lime-300 shadow-2xl">
            <img className = "h-24 w-24" src = {logo} alt = "logo"/>
            <ul className="flex items-center">
                <li>{isOnline ? "🟢🟢" : "🔴🔴"}</li>
                <li className="px-2 font-bold text-xl"><Link to = "/">Home</Link></li>
                <li className="px-2 font-bold text-xl"><Link to = '/about'>About</Link></li>
                <li className="px-2 font-bold text-xl"><Link to = '/contact'>Contact</Link></li>
                <li className="px-2 font-bold text-xl"><Link to = 'cart'>Cart</Link></li>
                <li className="px-2 font-bold text-xl"><Link to = '/login'>Login</Link></li>
            </ul>
        </div>
    )
}


export default Head;