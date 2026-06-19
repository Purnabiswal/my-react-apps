import React from 'react'
import { Bookmark } from "lucide-react";

const Card = () => {
  return (
    <div>
      <div className="parent">
        <div className="cards">
          <div className="top">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png"/>
            <div>
              <button> Save <Bookmark size={10}/> </button>
            </div>
          </div>

          <div className="center">
            <h3>Amazon <span>5 days ago</span></h3>
            <h2>Senior UI/UX Designer</h2>
            <div className='tag'>
              <h4>Part Time</h4>
              <h4>Senior Level</h4>
            </div>
          </div>

          <div className="bottom">
            <div>
              <h3>$120/hr</h3>
              <p>Mubai, India</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
