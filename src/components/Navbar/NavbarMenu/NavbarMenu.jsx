import {React,useState} from 'react'
import './style.scss'
import {NavLink} from 'react-router-dom'

function NavbarMenu() {

    return (
        <>
        <div className="navbar-menu">
            <ul className="navbar-menu-list">
                <li className="menu-item "><NavLink  activeClassName="active" exact to="/" >Home</NavLink></li>
                <li className="menu-item"><NavLink  activeClassName="active" to="/about" >About</NavLink></li>
                <li className="menu-item"><NavLink   to="/contact" activeClassName="active" >Contact</NavLink></li>
                <li className="menu-item"><NavLink   to="/" activeClassName=""  >Category</NavLink></li>
                <li className="menu-item"><NavLink to="/" activeClassName=""  >Category</NavLink></li>
            </ul>
            </div>
       </>
    )
}

export default NavbarMenu
