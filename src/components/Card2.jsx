import React from 'react'
import Cards from './Cards'


const Card2 = () => {

    const data={
        "name":"RAK ICC",
        "price":"2,997",
        "info":"Rak Icc New Company formation includes"
    };
  return (
    <div className='c2matter' style={{backgroundColor:"#525ded",color:"white",paddingLeft:"10px",borderRadius:"5px" }}>
        <Cards {...data} />
        <div className='continueb1'>Continue</div>
      
    </div>
  )
}

export default Card2
