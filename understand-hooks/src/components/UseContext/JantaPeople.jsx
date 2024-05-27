import React, { useContext } from 'react'
import MyContext from './MyContext';

const JantaPeople = () => {
const data = useContext(MyContext)
console.log("This data is coming from context",data)
  return (
    <div>
      <h3>Janta People</h3>
      <h4>{data.yojna.money}</h4>
      <h4>{data.yojna.pension}</h4>
      <h4>{data.yojna.rashan? "Rashan":"No Rashan"}</h4>
      <h4>{data.counter}</h4>
      <button onClick={()=>data.setCounter(data.counter+1)}>Increase</button>
    </div>
  );
};

export default JantaPeople
