import React from 'react'
import Navbar from '../shared/Navbar'
import { NavLink } from 'react-router-dom'


const authenticatedOptions = (
    <div className="links">
        <NavLink className='logout' to="/sign-out">Log Out</NavLink>
    </div>
)

const unauthenticatedOptions = (
    <div className="links">
    </div>
)

const alwaysOptions = (
    <div className="links">
    </div>
)

const Header = ({ user }) => (
    <>
      {user && <span className="navbar-text">Welcome, {user.email}</span>}
      <div className="nav">
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
      </>
  )

export default Header
