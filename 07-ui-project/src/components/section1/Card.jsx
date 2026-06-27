import React from 'react'
import RightCardContent from './RightCardContent';

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="h-140 w-60 shrink-0 overflow-hidden relative rounded-4xl  ">
      <img
        className="h-full w-full object-cover "
        src={props.img}
      />
      <RightCardContent tag={props.tag} color={props.color}/>
    </div>
  );
}

export default Card
