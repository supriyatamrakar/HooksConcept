import React, { useState, useEffect  } from 'react'

const UseEffectComponent = () => {

const [count,setcount]= useState(0);

useEffect( ()=> {
    console.log("UseEffect is Running")

    document.title = count;
},[count])

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={()=> setcount(count+1)}>Increase</button>
      <button onClick={()=> setcount(count-1)}>Decrease</button>
    </div>
  )
}

export default UseEffectComponent
