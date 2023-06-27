import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
     <div className="nav-left">
        <h3>
            CollegeResume
        </h3>
     </div>
     <div className="nav-right">
        <ul>
        <li>  Home </li>
          <li>  Templates</li>
           <li>Sign-Up</li>
            <li>Login</li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar