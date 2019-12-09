import React from 'react'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
    <div className="links">
        <NavLink to="/sign-out">Sign Out</NavLink>
    </div>
)

const unauthenticatedOptions = (
    <div className="links">
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
    </div>
)

const alwaysOptions = (
    <div className="links">
        <NavLink to="/">Ornate Optical</NavLink>
    </div>
)

export default Header