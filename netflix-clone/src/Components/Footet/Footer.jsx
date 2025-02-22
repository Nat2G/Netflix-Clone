import React from 'react'
import  './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer_outer_container'>
          <div className='footer_inner_container'>
          <div className='footer_icons'>
            < FacebookOutlinedIcon />
            < InstagramIcon />
            < YouTubeIcon />
          </div>
          <div className='footer_data'>
            <div>
              <ul>
                <li>Audio Description</li>
                <li>Investor Rellations</li>
                <li>Legal Notice</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Help center</li>
                <li>Job</li>
                <li>Cookie preference</li>
              </ul>
            </div> 
            <div>
              <ul>
                <li>Gift Cards</li>
                <li>Terms</li>
                <li>Corporate information</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>Media center</li>
                <li>privecy</li>
                <li>contact use</li>
              </ul>
            </div>
            

          </div>
          <div className='service_code'>
              <p>ServiceCode</p>
            </div>
            <div className='copy_write'>
               <p>&copy; 1999-2025 Netlix</p>
            </div>


          </div>

    </div>
  )
}

export default Footer