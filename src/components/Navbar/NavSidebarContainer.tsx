import React from 'react'
import logo from '../../assets/curreaseLogo.png'
import { HiOutlineShoppingBag } from "react-icons/hi";
import './NavSidebarContainer.css'
export const NavSidebarContainer = () => {
  return (
    <div id="nav-container">
      <div id="left-container">
        <img className="nav-logo" src={logo} alt="Currease" />
      </div>
      <div id="right-container">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">
            <div className="shop-box">
              <span>Shop</span>
              <span><HiOutlineShoppingBag size={30} /></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
