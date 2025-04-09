// import React from 'react'
// import { useState } from 'react';

// import Button from 'react-bootstrap/Button';
// const App = () => {
//   const [name, setName] = useState('ankit');
//   const [color, setColor] = useState('red');
//   const [count, setCount] = useState(0);
//   return (
//     <>
//       <h1>Hooks</h1>
//       <h2>useState</h2>
//       <p>useState is a Hook that lets you add React state to function components.</p>
//       <h1>Welcome : {name}</h1>
//       <button onClick={() => setName('om prakash')}>Change Name</button>
//       <h2 style={{color:color}}>Favourite Color: {color}</h2>
//       <button onClick={() => setColor('pink')}>Change Color</button>

//       {/* counter in react js */}
//       <div id='countBox'>
//       <h1>Counter App</h1>
//         <Button variant="secondary" onClick={count}>Increment</Button>
//         <h2>Count: { count}</h2>
//         <Button variant="secondary">Decrement</Button>
//         <Button variant="secondary">Reset</Button>

//         </div>
//     </>
//   )
// }

// export default App;
{/**
  import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  const [name, setName] = useState('ankit');
  const [color, setColor] = useState('red');
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count > 0 ? count - 1 : 0);
  const handleReset = () => setCount(0);

  return (
    

    <>
      <h1 className="text-center">Hooks</h1>
      <div id='countBox'>
        <h3>Welcome: <span className="text-success">{name}</span></h3>
        <Button variant="info" onClick={() => setName('om prakash')}>Change Name</Button>
      

      
        <h3 style={{ color }}>Favourite Color: {color}</h3>
        <Button variant="warning" onClick={() => setColor('pink')}>Change Color</Button>
      

      
        <h2 className="mb-3">Counter App</h2>
        
          <Button variant="success" onClick={handleIncrement}>Increment</Button>
          <Button variant="secondary" onClick={handleDecrement}>Decrement</Button>
          <Button variant="danger" onClick={handleReset}>Reset</Button>
        
        <h3>Count: <span className="text-primary">{count}</span></h3>
      </div>
    </>
  );
};

export default App;
 */}

// Topic useEffect
import React, { useState, useEffect } from 'react';

import Form from './Form';
const App = () => {
  const [count, setCount] = useState(0);
  const [multi, setMulti] = useState(0);
// 1. type
  // useEffect(() => {
  //   setTimeout(() => {
  //   setCount(count + 1);
  // }, 2000);
  // });

  // 2. second type only one time render
  // useEffect(() => {
  //   setTimeout(() => { 
  //     setCount(count + 1);
  //   }, 2000);
  // }, []);

  // 3. third type its render only when count change according to the dependency array
  useEffect(() => {
    setMulti(count * 2);
  }, [count]);
  return (
    <>
      <h1>useEffect count = { count}</h1>
      <p>useEffect is a Hook that lets you perform side effects in function components.</p>
      <h2>Multiplication: {multi}</h2>
      <button onClick={() => setCount(count + 1)}>click here</button>
      <Form />
    </>
  )
}

export default App;
