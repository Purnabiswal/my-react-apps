import axios from 'axios'
import React, { useState } from 'react'

const App = () => {

  const [images, setimages] = useState([]);
  
 
  const getData=async ()=>{
    //Using fetch
    // const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // const data=await response.json();
  

    // // console.log(response);
    // console.log(data);


    
    //Using axios
    // const response = await axios.get("https://jsonplaceholder.typicode.com/users");


    // console.log(response.data);
    

    //Destructuring
    const {data} = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );

    console.log(data);

  }

  const getImageData=async()=>{
    const response = await axios.get("https://picsum.photos/v2/list");

    const data=response.data;
    console.log(response.data);
    
    const image_urls=data.map((elem)=>{
      const { download_url }=elem;

      return download_url
    })

    setimages(image_urls)

  }

  return (
    <div>
      <div className='image-container'>

        {images.map((elem, idx)=>{
          return (
            <div key={idx}>
              <img src={elem} alt="" className='image' />
            </div>
          );            
        })}

      </div>
      <button onClick={getImageData}>Get Data</button>
    </div>
  );
}

export default App
