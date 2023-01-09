import { Handyman } from '@mui/icons-material'
import React from 'react'
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <div className='logo'><img src='images/Group 114.png' /></div>
        <div className='options'>
            <div className='opt1'>Home</div>
            <div className='opt2'>Services</div>
            <div className='opt3'>Pricing</div>
            <div className='opt4'>About Us</div>
            <div className='opt5'>Start a Company</div>
        </div>
        <div className='n3'><MenuIcon /></div>
      </div>
      
    </div>
  )
}

export default Navbar
