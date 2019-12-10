import React from 'react'
import Navbar from '../shared/Navbar'
import { NavLink } from 'react-router-dom'
import Navbar from '../shared/Navbar'


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

const Header = () => (
    <Navbar />

)

export default Header
