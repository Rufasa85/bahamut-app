import React from 'react';


function JSXVariables() {
  const name = 'Bahamut and Shiva';
  const num1 = 1;
  const num2 = 2;
  const sayHi = ()=>{
    return <h2>Hello from the cats!</h2>
  } 
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          {/* JavaScript expressions can be escaped inside of curly braces */}

          <h2>My cat's name is {name}. But you can call me...</h2>
          <h1>The JSX Boss!</h1>
          <hr />
          <h2>I can do math: {num1 + num2}.</h2>
          <h2>
            I can generate random numbers:
            {sayHi()}
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1},
            {Math.floor(Math.random() * 10) + 1}.
          </h2>
          <h2>I can even reverse my name: {name.split('').reverse().join("")}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
