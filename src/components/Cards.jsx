import React from 'react'
import "./cards.css"

const Cards = ( props ) => {
    console.log(props.name)
  return (
    <div>
      <div className='bigcard'>
        <h1>{props.name}</h1>
        <div className='bcard'><h2>{props.price}</h2><span><p style={{color:"gray"}}>One Time Payment</p></span></div>
        <p className='infop'>{props.info}</p>
        <div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Attestation Charges</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Registered Agent</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Registered Office</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Varal Administrative</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Preparing Statutory File</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Liasing with Registration Authorities</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Due Diligence Appraisal</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Keeping The Register</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Seal Charges</p></div>
            <div className='points' ><img src='images/Group 35.png' /><p className='pointsp'>Certificate of Good Standing</p></div>
        </div>
       



      </div>
    </div>
  )
}

export default Cards
