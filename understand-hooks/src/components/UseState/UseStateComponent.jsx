import React, { useState } from 'react'

const UseStateComponent = () => {

    const [counter,setCounter] = useState(0);

const increase = ()=>{
    setCounter(counter+1)
    console.log("Increase function", counter)
}

const decrease = ()=>{
    setCounter(counter-1)
    console.log("Decrease function", counter)
}

  return (
    <div>

      <h3>{counter}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default UseStateComponent
