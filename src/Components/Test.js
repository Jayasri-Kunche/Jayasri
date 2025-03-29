import { useEffect, useState } from "react";

const Test = () => {
    const[value, setValue] =  useState(0)
    const[name, setName] = useState(true)
  
    console.log("Above")
    useEffect(() => {
        console.log("Effect")

    }, [])
    console.log("Below")

    const handleItem = () => {
        setValue(value + 1)
        // console.log(value)
    }
    return (
        <div>
          <h1>{value}</h1>
          <button onClick={handleItem}>Click</button>
          <h1>{name ? "HTML" : "React"}</h1>
          <button onClick={() => {
            setName(!name)
          }}>ChangeName</button>
          {console.log("Render")}
        </div>
    )
}

export default Test;