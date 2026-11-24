import React, { useState } from 'react'

const Events = () => {
  const [text,setText]=useState("")

  const handleClick=(name)=>{
    alert(`Welcome ${name}`)
  }
  const handleChange=(event)=>{
    setText(event.target.value)
  }  
  return (
    <div>
        <button
        onClick={()=>handleClick("Akash")}
        >Greet Akash</button>
        <br />
        <br />
        <input type="text" placeholder='Enter name'
        onChange={handleChange}/>
        <br />
        <h2>{text}</h2>
    </div>
  )
}

export default Events