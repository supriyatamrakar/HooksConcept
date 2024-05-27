import React, { useCallback, useState } from 'react';
import ChildComponent1 from './ChildComponent1';

const UseCallbackComponent1 = () => {
   const [counter1,setCounter1] = useState(0)
   const [counter2,setCounter2] = useState(0)

    const handleClick1 = useCallback(()=> setCounter1(counter1 + 1),[counter1])
  return (
    <div>
      <h3>Counter 2 = {counter2}</h3>
      <ChildComponent1 handleClick1={handleClick1}></ChildComponent1>
      <button onClick={()=> setCounter2(counter2 + 1)}>
        Counter_2_Increase_</button>
    </div>
  )
}

export default UseCallbackComponent1;