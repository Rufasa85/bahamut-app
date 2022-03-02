import React, { useState, useEffect } from 'react';

export default function Display() {
  const [count, setCount] = useState(0);
  const [otherThing,setOtherThing] = useState("hello")

  // When the state changes run this callback
  useEffect(()=>{
    console.log("once")
    const storedCount = parseInt(localStorage.getItem("myCount"))||0;
    console.log(storedCount)
    setCount(storedCount)
  },[])
  useEffect(() => {
    // Update the localStorage count variable using the setItem method
    console.log("inside use effect!")
    if(count){
      localStorage.setItem('myCount', count);
    }
  },[count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <code>check localStorage in developer console</code>
      <hr />
      <button type="button" onClick={handleIncrease}>
        Click me
      </button>
    </div>
  );
}
