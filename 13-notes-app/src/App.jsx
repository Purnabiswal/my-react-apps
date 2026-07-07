import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

const App = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  const [task, settask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);

    const copyTask = [...task];
    copyTask.push({ title, details });

    settask(copyTask);

    settitle("");
    setdetails("");
  };


  const deleteNote=(idx)=>{
    const copyTask=[...task]
    // console.log(copyTask[idx]);
    copyTask.splice(idx,1)
    settask(copyTask)

  }

  // useEffect(() => {
  //   // console.log(task);
  // }, [task]);

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
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        {/* Details */}
        <textarea
          type="text"
          className="h-32 w-full font-medium flex flex-row items-start px-5 py-2 border-2 rounded-2xl outline-none"
          placeholder="Enter Details"
          value={details}
          onChange={(e) => {
            setdetails(e.target.value);
          }}
        />

        <button className="w-full font-medium bg-white active:scale-95 text-black px-5 py-2 rounded outline-none">
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
        <div className="flex flex-wrap gap-5 items-start justify-start mt-5 h-[90%] overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-40 text-black  rounded-xl bg-cover relative
                bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]  px-4 py-9"
              >
                <h1 
                onClick={()=>{
                  deleteNote(idx)
                }}
                className="bg-red-500 w-min absolute top-5 right-5 rounded-full p-1 active:scale-95">
                  <X />
                </h1>

                <h1 className="text-lg leading-tight font-bold">
                  {elem.title}
                </h1>
                <p className="leading-tight text-sm font-medium text-gray-500 mt-2">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
