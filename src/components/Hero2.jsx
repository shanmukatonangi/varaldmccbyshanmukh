import React from 'react'
import "./hero.css"

const data=[{
 " id":1,
'title':"UAE Free Zone Company",
"desc":"Your registration agent, will answer all of your questions and help you to reach a conclusion that meets your objectives of investing in the UAE",
"img":"images/dungeon.png"

},


{
  "id":2,
  "title":"Dubai Local Companies",
  "desc":"The Dubai LLC formation documents are actually articles of organization or a certificate of organization. You can get yours today",
  "img":"images/Vector-2.png"
},
{
  "id":3,
  "title":"Offshore Compamies",
  "desc":"You can register an offshore company and open its bank account in Dubai. Your agent will help you along all the process",
  "img":"images/Vector-1.png"
}]

const Hero2 = () => {
  return (
    <div>
      <div className='h2m'>
        <h3 style={{color:"#525ded"}}>Watch the video about UAE or Offshore Company Registration</h3>
        <div className='vcp'><img src='images/GROUP 117.png' /></div>
     </div>
     <div className='h2m1'>
      <h2>Dedicated</h2>

<h2 className='h2m1h2'>to our mission we are</h2>
      <p>Our services include Company Formation & Renewals, 
Trust & Fiduciary, Tax Residency Setup With Family, Bank 
Accounts, Remote Management, Stock Trading 
Platforms, Ownership Solutions.</p>
     </div>

     <div className='products'>
      {data.map((item)=>
      <div className='prd' key={item.id}>
        <img src={item.img} />
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <p style={{color:"#ffa500"}} className='prdp'>GET STARTED</p>



      </div>
     
     )}
     
     </div>
    </div>
  )
}

export default Hero2
