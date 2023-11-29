import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import './ProvinceSelect.css'

export const ProvinceSelect = () => {
  return (
    <div id="province-container">
        <div id="province-title"><span id="first-word">Products</span> Within <br /> Your Province</div>
        <div className="select-container">
            <div id="field">Select Province</div>
            <button className="province-btn"><MdArrowForwardIos /></button>
        </div>
    </div>
  )
}
