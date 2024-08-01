import React from 'react'
import rasm from "../asset/logo.svg"
import "../Header/Header.scss"
import iconsUser from "../asset/iconsUser.svg"
import Cart from "../asset/Cart.svg"


const Header = () => {
    return (
        <div className="container">
            <div className="header__body">
                <div className='logo'>
                    <img src={rasm} alt="" />
                </div>
                <div className='header__collection'>
                    <ul>
                        <li>
                            <select name="select" id="">
                                <option value="">Discovery</option>
                                <option value="">Made</option>
                            </select>
                        </li>
                        <li>About</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className='header__item'>
                    <img src={iconsUser} alt="" />
                    <img src={Cart} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header