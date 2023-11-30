import React from 'react'
import emojiHome from '../../assets/emojiHome.png'
import './HomeBanner.css'

export const HomeBanner = () => {
  return (
    <div id="banner-container">
        <div id="sm-heading">
            <span id="sm-heading-text">Unique Curry Powders</span>
        </div>
        <div id="title-container">
            <div className='check'>Wake Up Your <img className="emo-smile" src={emojiHome} alt="smiley" /></div>
            <div>Taste Buds With Us</div>
        </div>
        <div id="img-banner-container">
          
        </div>
    </div>
  )
}
