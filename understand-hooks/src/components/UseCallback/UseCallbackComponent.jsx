import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const UseCallbackComponent = () => {
   const [counter1,setCounter1] = useState(0)
   const [counter2,setCounter2] = useState(0)

    const handleClick = ()=> setCounter1(counter1 + 1);
  return (
    <div>
      <h3>Counter 2 = {counter2}</h3>
      <ChildComponent handleClick={handleClick}></ChildComponent>
      <button onClick={()=> setCounter2(counter2 + 1)}>Counter_2_Increase</button>
    </div>
  )
}

export default UseCallbackComponent;
