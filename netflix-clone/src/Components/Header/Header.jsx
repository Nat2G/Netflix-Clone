import React from 'react'
import "./Header.css"
import Nett from "../../assets/Images/Nett.JPEG"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';




function Header() {
  return (
    <div className='header_outer_container'>
      <div className='header_outer'>
          <div className='header_left'>
            <ul>
                
                <li><img src={Nett} alt="Netflix logo" width="100" /></li>
                <li>Home</li>
                <li>TvShows</li>
                <li>Movies</li>
                <li>Latest</li>
                <li>MyList</li>
                <li>Brows By Language</li>
            </ul>

          </div>
          <div className='header_right'>
            <ul>
             <li><SearchIcon/></li>
             <li><NotificationsNoneIcon/></li>
             <li><AccountCircleIcon/></li>
             <li><ArrowDropDownIcon/></li>
             
            </ul>

          </div>
        </div>
    </div>
    
    
  )
}

export default Header