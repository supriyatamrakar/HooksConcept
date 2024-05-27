import React, { useEffect } from 'react'

const ChildComponent1 = (handleClick1) => {
    useEffect(()=> {
        console.log("Child Component UseEffect is running....")
    },[handleClick1])
  return (
    <div>
      
    </div>
  )
}

export default ChildComponent1;