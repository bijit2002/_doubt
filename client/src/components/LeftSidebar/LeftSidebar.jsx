import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from '../../assets/Globe.svg'


function leftSidebar() {
  return (
    <div className='left-sidebar'>
      <div className='side-nav'>
        <NavLink to='/' className='side-nav-links' activeclassname='active'>
          <p style={{ paddingLeft: "30px" }}>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          {/* <div>
            <p>PUBLIC</p>
          </div> */}
          <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
            {/* <img src={Globe} alt='Globe' /> */}
            <p style={{ paddingLeft: "30px" }}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' style={{ paddingLeft: "40px" }}>
            <p>Topics</p>
          </NavLink>
          <NavLink to='/Users' className='side-nav-links' style={{ paddingLeft: "40px" }}>
            <p>Users</p>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default leftSidebar