import React from 'react'
import "./search.css"
import SearchIcon from '@mui/icons-material/Search';

const Searchbar = () => {
  return (
    <div>
      <div className='searchbar' >
        <div className='searchicon'>
            <SearchIcon fontSize='large' style={{color:"blue"}} className="si" />
            <p>Search a Term | Topic</p>

        </div>
      </div>
    </div>
  )
}

export default Searchbar
