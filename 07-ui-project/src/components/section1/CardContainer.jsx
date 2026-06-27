import React from 'react'
import Card from './Card'

const CardContainer = (props) => {
  return (
    <div
      id="right"
      className="  flex gap-7 flex-nowrap overflow-auto rounded-4xl"
    >
      {props.users.map(function(e, idx){
        return <Card key={idx} id={idx} img={e.img} tag={e.tag} color={e.color}
        />
      })}
    </div>
  );
}

export default CardContainer
