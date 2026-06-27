import React from 'react'
import NavBar from './NavBar'
import CenterContainer from './CenterContainer'

const Section1 = (props) => {
  // console.log(props);
  
  return (
    <div className='h-screen w-full bg-white '>
      <NavBar/>
      <CenterContainer users={props.users}/>
    </div>
  )
}

export default Section1
