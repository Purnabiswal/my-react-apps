import React from 'react'
import Card from './Card'
import CardContainer from './CardContainer'
import LeftText from './LeftText'

const CenterContainer = () => {
  return (
    <div className=' flex  items-center gap-28 px-14'>
      <LeftText/>
      <CardContainer/>
    </div>
  )
}

export default CenterContainer
