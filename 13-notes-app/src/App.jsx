import React, { useEffect, useState } from "react";

const App = () => {


  const [title, settitle] = useState('');
  const [deatails, setdeatails] = useState('');

  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    createTask(title, deatails);

    settitle('')
    setdeatails('')

    
  };

  const createTask=(title, deatails)=>{
  
    const newTask={
      title,
      deatails
    }
    settask(preevTask=>[...preevTask, newTask])
    
  }

  useEffect(()=>{
    console.log(task);
    
  },[task])

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);

        }}
        className="flex  lg:w-1/2 items-start flex-col gap-4 p-10"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>


        {/* Heading */}

        <input
          type="text"
          className="w-full px-5 py-2 font-medium border-2 rounded-2xl outline-none"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
        />



        {/* Details */}
        <textarea
          type="text"
          className="h-32 w-full font-medium flex flex-row items-start px-5 py-2 border-2 rounded-2xl outline-none"
          placeholder="Enter Details"
          value={deatails}
          onChange={(e)=>{
            setdeatails(e.target.value)
          }}
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

      <div className=" lg:w-1/2  gap-5  flex-wrap p-10 lg:border-l-2 ">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          <div className="h-52 w-40 rounded-2xl bg-white p-2 "> 
            <h1 className="text-black text-3xl">{task[0].title}</h1>
            <h3 className="text-gray-700 text-xl mt-2">{task[0].details}</h3>
          </div>
          <div className="h-52 w-40 rounded-2xl bg-white "> </div>
          <div className="h-52 w-40 rounded-2xl bg-white "> </div>
        </div>
      </div>
    </div>
  );
};

export default App;
