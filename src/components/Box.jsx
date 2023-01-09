import React from 'react'
import "./box.css"

const Box = () => {
  return (
    <div>
      <div className='container'>
        <div className='b1'>
            <div className='h2mb'>
                <h2 style={{fontWeight:"normal"}}>Learn the ways in which you can benefit 
from a UAE/Offshore Company. Then get 
started on fulfilling your UAE dream.</h2>
              <h2 className='h2mc'>Claim a Free Quote</h2>
            </div>
            <div className='boxes'>
                <img className='boxesimg' src='src/images/ILLUSTRATION 03  1.png' />
                <h2>Bank Account Setup</h2>
                <p>There are many banks in the United 
Arab Emirates [UAE]. Both locally 
owned and branches of 
multinational ones. Foreign banks 
adjust according to their parent s 
strategies and have changed local 
requirements overnight in the past. 
But we are here to help you.</p>
                <h2 className='learn'>Learn more   <span><img src='images/vector.png' /></span></h2>
            </div>
            <div className='boxes'>
            <img  className='boxesimg' src='images/Group-2.png' />
                <h2>UAE Company Visas</h2>
                <p>Your application for visas is critical 
especially if you intend to move to 
Dubai. This becomes even more 
urgent if your family will also move 
with you. All the paperwork is done 
on your behalf smoothly so that you 
may only focus on doing what 
matters most to you.</p>
<h2 className='learn'>Learn more<span><img src='images/vector.png' /></span></h2>
            </div>
        </div>
        <div className='b2'>
            <div className='boxes'> <img  className='boxesimg' src='images/Group.png' />
                <h2>Advice & Guidance</h2>
                <p>All activities in the UAE are licensed. 
Whether manufacturing, finance, 
trading, marketing, consultancy or 
restaurants. In some countries only 
manufacturing is licensed. In others 
there is a threshold below which 
business are encouraged. Get our 
insightfull guidance today.</p>
<h2 className='learn'>Learn more<span><img src='images/vector.png' /></span></h2>
                </div>
           <div className='boxes'> <img  className='boxesimg' src='images/Group-1.png' />
                <h2>Registration Document 
Perparation</h2>
                <p>Several documents must be 
prepared to start the process of 
registering a new company in the 
United Arab Emirates. Be it a Dubai 
local company, a free zone one or an 
offshore entity. Your registered 
agent is dedicated to get this done 
for you for a seamless process.</p>
<h2 className='learn'>Learn more<span><img src='images/vector.png' /></span></h2>
</div>
           <div className='h2mb'>
            <h2 style={{fontWeight:"normal"}}>We have gathered a team of 
professionals to craft adequate 
services you can rely on for a friction 
free setup in UAE.</h2>
<h2 className='h2mc'>Claim a Free Quote</h2>
           
           </div>
        </div>
      </div>
    </div>
  )
}

export default Box
