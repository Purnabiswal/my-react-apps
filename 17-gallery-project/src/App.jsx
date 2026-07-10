import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=14`,
    );

    // console.log(response);
    // console.log(response.data);
    setUserData(response.data);
  };

  let printUserData = (
    <h1 className="text-gray-300 text-xs font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h1>
  );
  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden bg-white rounded-xl">
              <img
                className="h-full w-full object-cover "
                src={elem.download_url}
                alt=""
              />
            </div>
            <h1 className="font-bold text-lg">{elem.author}</h1>
          </a>
        </div>
      );
    });
  }

  useEffect(() => {
    setUserData([])
    getData();
  }, [index]);

  return (
    <div className="h-screen overflow-auto bg-black text-white p-4">
      {/* <button
        className="bg-green-600 mb-4 active:scale-95 rounded px-5 py-2"
        // onClick={getData}
      >
        Get Data
      </button> */}
      <h1 className=" fixed bg-red-600 text-6xl">{index}</h1>

      <div className="flex flex-wrap gap-4 h-[82%] p-2">{printUserData}</div>

      <div className="flex justify-center items-center gap-6 p-4">
        <button
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
          onClick={() => {
            if(index>1) setIndex(index-1)
          }}
        >
          Prev
        </button>
        <button
          className="bg-amber-400 text-black text-sm cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold"
          onClick={() => {
            setIndex(index+1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
