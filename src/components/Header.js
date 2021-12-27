import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeicon from '../assets/header/theme-switch.png'

function Header() {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src ={punkLogo} className="punklogo" alt="no pic"/>
            </div>
            <div className="searchbar">
                <div className="seachIconContainer">
                      <img src ={searchIcon} className="searchIcon" alt="no pic"/>
                </div>
                <input className="searchInput" placeholder = "Collection,item or user..."/>
            </div>
            <div className="headerItems">
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src ={themeicon} alt="nopic" />
                </div>
            </div>
            <div className="loginButton">GET IN</div>
        </div>
    )
}

export default Header
