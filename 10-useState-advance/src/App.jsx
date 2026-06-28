import React, { useState } from "react";

const App = () => {
  const [num, setnum] = useState(0);

  const changeNum = () => {
    setnum(num + 1);
    console.log(num); // This will print old value as 'setnum' is asynchrounous in nature
  };

  //Workinbg with arrays/object

  const [a, seta] = useState({
    name: "Purna",
    age: 20,
  });

  //Way-1 to update array/object
  const btnClciked = () => {
    const newNum = { ...a };
    // console.log(newNum);
    newNum.name = "Aman";
    seta(newNum);
  };

  //Way-2 to update array/object
  const btnClciked2 = () => {
    seta((prev) => ({ ...prev, age: 50 }));
  };


  //Batch update
  const btnClicked3 = () => {
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
    setNum(prev => (prev + 1));
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={changeNum}>Click</button>

      <h1>
        Name: {a.name}, Age: {a.age}
      </h1>

      <button onClick={btnClciked}>Button1</button>
      <button onClick={btnClciked2}>Button2</button>
    </div>
  );
};

export default App;
