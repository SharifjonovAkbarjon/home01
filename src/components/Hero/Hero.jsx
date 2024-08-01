import "../Hero/Hero.scss"
import React from 'react'
import heroRasm from '../asset/hero.png'

const Hero = () => {
    return (
        <>
            <div className="hero__part">
                <div className="container">
                    <div className="hero__body">
                        <div className="hero__candle">
                            <h2><span>🌱</span>The nature candle</h2>
                            <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
                            <button>Discovery our collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero