import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

const Nav = () => (
<<<<<<< HEAD
	<nav>
        <NavLink className="title" to="/">ORNATE OPTICAL</NavLink>
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
=======
        <nav>
                <NavLink className="title" to="/">ORNATE OPTICAL</NavLink>
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

>>>>>>> b578eae6074e056783631a7f5b545bd1650b7e87
)

export default Nav
