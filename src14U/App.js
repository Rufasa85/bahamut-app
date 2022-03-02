import React,{useState} from "react";
import Counter from "./components/Counter";

function App() {
  let [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  const handleDecrement = () => {
    setCount((count - 1));
  };
  
  const resetCount = ()=>{
    setCount(0)
  }
  return (
    <>
    
  <Counter      count={count}
  handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        resetCount={resetCount}/>

  <Counter      count={count}
  handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        resetCount={resetCount}/>
  </>
  )
}

export default App;
