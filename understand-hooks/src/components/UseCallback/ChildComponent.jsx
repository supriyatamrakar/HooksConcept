import React, { useEffect } from 'react'

const ChildComponent = (handleClick) => {
    useEffect(()=> {
        console.log("Child Component UseEffect is running....")
    },[handleClick])
  return (
    <div>
      
    </div>
  )
}

export default ChildComponent
