import React from 'react'
import Cards from './Cards'


const Card1 = () => {

    const data={
        "name":"AJMAN OFFSHORE",
        "price":"2,997",
        "info":"Ajman Offshore New Company formation includes"
    };
  return (
    <div>
    <Cards {...data} />
    <div className='continueb'>Continue</div>
      
    </div>
  )
}

export default Card1
