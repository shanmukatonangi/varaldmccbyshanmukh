import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div className='matter'>
        <h3>Claim a Free Quote</h3>
        <h1>Get started on fulfilling 
your Dubai or UAE 
dream.</h1>
        <h3>UAE & Offshore Company</h3>
        <h4 className='h3m' style={{color:"gray"}}>We provide you with information about UAE or 
Offshore Company Registration & help you 
setup your company with a bank account and 
visas.</h4>
        <div className='sac'>
            <div className='sac1'>Start a company</div>
            <div className='sac2'>Renew a company</div>
        </div>
      </div>
      <div className='heroimg'>
        <img src='images/ILLUSTRATION.png' />
      </div>
    </div>
  )
}

export default Hero
