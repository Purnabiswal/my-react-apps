import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {

    const navigate=useNavigate()

  return (
    <div className="py-3 px-5 bg-purple-600">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-violet-500 font-medium px-5 py-2 rounded m-2 active:scale-95 cursor-pointer"
      >
        Return to home page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-violet-500 font-medium px-5 py-2 rounded m-2 active:scale-95 cursor-pointer"
      >
        Back
      </button>

      <button
        onClick={() => {
          navigate(+1);
        }}
        className="bg-violet-500 font-medium px-5 py-2 rounded m-2 active:scale-95 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Navbar2
