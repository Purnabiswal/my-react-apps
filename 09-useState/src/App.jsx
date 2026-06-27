// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   // let a=20;

//   // const ChangeA =()=>{
//   //   a=30;
//   // }

//   //Using useState
//   let [a, seta] = useState(10); //use 'usf' to expand //Here 'a' is read only and 'seta' is write only

//   const changeA=()=>{
//     seta(++a)
//   }

//   return (
//     <div>

//       <h1>Value of a is {a}</h1>

//       <button onClick={changeA}>Change</button>

//     </div>
//   )
// }

// export default App

import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  function increaseNum() {
    setnum(num+1);
  }

  function decreaseNum() {
    setnum(num-1);
  }

  return (
    <div>
      <h1>{num}</h1>

      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
    </div>
  );
};

export default App;
