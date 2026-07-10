import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=4&limit=15",
    );

    // console.log(response);
    // console.log(response.data);
    setUserData(response.data);
  };

  let printUserData = "No User available";
  if(userData.length>0){
    printUserData=userData.map((elem, idx)=>{
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
    })
  }

  return (
    <div className="h-screen overflow-auto bg-black text-white p-4">
      <button
        className="bg-green-600 mb-4 active:scale-95 rounded px-5 py-2"
        onClick={getData}
      >
        Get Data
      </button>

      <div className="flex flex-wrap gap-4">
        {printUserData}
      </div>
    </div>
  );
};

export default App;
