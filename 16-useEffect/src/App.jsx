//Example 1:
// import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0);
//   const [num2, setnum2] = useState(100);

//   useEffect(()=>{
//     console.log('Useeffect running...');

//   },[num])

//   return (
//     <div>
//       <h1>{num}</h1>
//       <h1>{num2}</h1>
//       <button
//         onClick={() => {
//           setnum(num + 1);
//         }}
//       >
//         Click
//       </button>
//       <button
//         onClick={() => {
//           setnum2(num2 + 1);
//         }}
//       >
//         Click
//       </button>
//     </div>
//   );
// }

// export default App

//Example 2:
import React, { useEffect, useState } from "react";

const App = () => {
  const [a, seta] = useState(0);
  const [b, setb] = useState(0);


  

  function aChanging(){
    console.log('A ki value change ho gayi');
  }

  function bChanging() {
    console.log("B ki value change ho gayi");
  }



  useEffect(() => {
    aChanging();
    // console.log("Useeffect is running....");
  }, [a]);

  useEffect(() => {
    bChanging()
    // console.log('Useeffect is running....');
    
  },[b]);

  return (
    <div>
      <h1>{a}</h1>
      <h1>{b}</h1>
      <button onClick={()=>{
        seta(a+1)
      }}>Change A</button>
      <button onClick={()=>{
        setb(b-1)
      }}>Change B</button>
    </div>
  );
};

export default App;
