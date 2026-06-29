import React from 'react'

const App = () => {



  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("Form submitted");
    
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex  lg:w-1/2 items-start flex-col gap-4 p-10"
      >
        <input
          type="text"
          className="w-full px-5 py-2 font-medium border-2 rounded-2xl outline-none"
          placeholder="Enter Notes Heading"
        />
        <textarea
          type="text"
          className="h-32 w-full font-medium flex flex-row items-start px-5 py-2 border-2 rounded-2xl outline-none"
          placeholder="Enter Details"
        />

        <button className="w-full font-medium bg-white text-black px-5 py-2 rounded outline-none">
          Add Note
        </button>
        {/* <img
          className="h-52"
          src="https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png"
          alt=""
        /> */}
      </form>

      <div className="flex lg:w-1/2  gap-5  flex-wrap p-10 bg-gray-500">
      <h1>Your Notes</h1>
        <div>
          <div className="h-52 w-40 rounded-2xl bg-white "> </div>
          <div className="h-52 w-40 rounded-2xl bg-white "> </div>
        </div>
      </div>
    </div>
  );
}

export default App
