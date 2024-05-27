import React, { useMemo, useState } from 'react'


const UseMemoComponent = () => {
const [inputValue,setInputValue]= useState(" ");

const calculateResult = (input) =>{
    console.log("calculating result...")
    return input.length;
}

const memoizedResult = useMemo(()=>calculateResult(inputValue),[inputValue])

  return (
    <div>
      <input
       value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)}
       type="text">
      </input>
      <h3>Input Length = {memoizedResult} </h3>
    </div>
  )
}

export default UseMemoComponent;
