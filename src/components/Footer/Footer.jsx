import React from 'react'
import '../Footer/Footer.scss'
import rasm from '../asset/footer.png'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer__body">
                        <hr />
                        <div className='footer__text'>
                            <div className='logos'>
                                <img src={rasm} alt="" />
                                <p>Your natural candle made for your home and for your wellness.</p>
                            </div>
                            <div className='footer__title'>
                                <div className='footer__ul'>
                                    <ul>
                                        <li className='footer__li'>Discovery</li>
                                        <li>New season</li>
                                        <li>Most searched</li>
                                        <li>Most selled</li>
                                    </ul>
                                </div>
                                <div className='footer__ul'>
                                    <ul>
                                        <li className='footer__li'>About</li>
                                        <li>Help</li>
                                        <li>Shipping</li>
                                        <li>Affiliate</li>
                                    </ul>
                                </div>
                                <div className='footer__ul'>
                                    <ul>
                                        <li className='footer__li'>Info</li>
                                        <li>Contact us</li>
                                        <li>Privacy Policies</li>
                                        <li>Terms & Conditions</li>
                                    </ul>
                                </div>
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer