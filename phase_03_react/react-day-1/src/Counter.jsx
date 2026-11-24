import { useState } from "react"

// hooks =>special features of react like useState, useEffect
function Counter(){
    
    const [count,setCount] = useState(0) 

    const handleInc=()=>{
        setCount(count+1)
        console.log(count)
    }
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleInc}>Increment</button>
            <button>Decrement</button>
        </>
    )
}
export default Counter