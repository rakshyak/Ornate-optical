import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => (
<<<<<<< HEAD
        <nav>
                <NavLink to="/">ORNATE OPTICAL</NavLink>
                <ul className="main-bar">
                        <li>WOMEN</li>
                        <li>MEN</li>
                        <li>SERVICES</li>
                </ul>
                <ul className="login-bar">
                        <NavLink to="/login">LOGIN</NavLink>
                        <li>CART</li>
                </ul>
        </nav>
=======
	<nav>
        <NavLink to="/">ORNATE OPTICAL</NavLink>
        <ul className="main-bar">
        <NavLink to='/glasses-women'>WOMEN</NavLink>
        <NavLink to='/glasses-men'>MEN</NavLink>
        <li>SERVICES</li>
        </ul>
        <ul className="login-bar">
        <NavLink to="/login">LOGIN</NavLink>
        <li>CART</li>
        </ul>
	</nav>
>>>>>>> 5f7892b7f74d016a030c444ba67623afcd1089bd
)

export default Nav
