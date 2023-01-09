import React from 'react'
import Cards from './Cards'


const Card3 = () => {

    const data={
        "name":"SHARJAH MEDIA CITY",
        "price":"4,124",
        "info":"Sharjah Media City New Company formation include "
    };
  return (
    <div >
    <Cards {...data} />
    <div className='continueb'>Continue</div>
      
    </div>
  )
}

export default Card3