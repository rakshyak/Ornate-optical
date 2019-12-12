import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => (
	<nav>
        <NavLink to="/">ORNATE OPTICAL</NavLink>
        <ul className="main-bar">
        <NavLink to='/glasses-men'><li>MEN</li></NavLink>
        <NavLink to='/glasses-women'><li>WOMEN</li></NavLink>
        <li>SERVICES</li>
        </ul>
        <ul className="login-bar">
        <NavLink to="/login">LOGIN</NavLink>
        <li>CART</li>
        </ul>
	</nav>
)

export default Nav
