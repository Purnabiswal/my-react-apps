import React from 'react'

const App = () => {

  function btnClicked(){
    console.log("Btn clicked");
    
  }

  function mouseEnter(){
    console.log("Mouse Enter");
    
  }

  const inputChanging=(value)=>{
    console.log(value);
    
  }

  return (
    <div>
      <h1>App</h1>

      <input onChange={function(elem){
        inputChanging(elem.target.value)
        
      }} type="text" placeholder='Entere Name' />

      {/* <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click me</button> */}
      <button onClick={btnClicked}>Click me</button>

      <button onClick={()=>{
        console.log("Click here");
        
      }}>Click here</button>
    </div>
  )
}

export default App
