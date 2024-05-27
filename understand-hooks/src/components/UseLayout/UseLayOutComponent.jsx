import React, { useLayoutEffect, useState, useEffect } from 'react'

const UseLayOutComponent = () => {
    const [bgColor,setbgColor]= useState('yellow')
    
    useLayoutEffect(()=>{
        console.log("UseLayoutEffect is running....")
document.body.style.backgroundColor= bgColor
    },[bgColor])

    useEffect(()=>{
        console.log("UseEffect is running....")
            },[])

  return (
    <div>
      <button onClick= {()=>setbgColor('red')}>ChangeColor</button>
    </div>
  )
}

export default UseLayOutComponent;
