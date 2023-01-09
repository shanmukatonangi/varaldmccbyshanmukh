import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import "./cards.css"

const Cardcomp = () => {
  return (
    <div>
      <div className='comp'>
        <Card1 />
        <Card2 style={{backgroundColor:"blue"}} />
        <Card3 />
      </div>
    </div>
  )
}

export default Cardcomp
