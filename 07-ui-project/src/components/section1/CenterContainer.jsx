import React from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import LeftText from './LeftText'

const CenterContainer = (props) => {
  return (
    <div className=' flex  items-center gap-28 px-14'>
      <LeftText/>
      <CardContainer users={props.users}/>
    </div>
  )
}

export default CenterContainer
