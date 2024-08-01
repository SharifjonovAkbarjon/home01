import React from 'react'
import "../Clean/Clean.scss"
import clean from '../asset/clean.png'


const Clean = () => {
    return (
        <>
            <div className="clean__part">
                <div className="container">
                    <div className="clean__body">
                        <div className='clean__title'>
                            <div className='clean__head'>
                                <h2>Clean and fragrant soy wax</h2>
                                <p>Made for your home and for your wellness</p>
                            </div>
                            <div className='clean__text'>
                                <span>Eco-sustainable:All recyclable materials, 0% CO2 emissions</span>
                                <span>Hyphoallergenic: 100% natural, human friendly ingredients </span>
                                <span>Handmade: All candles are craftly made with love.</span>
                                <span>Long burning: No more waste. Created for last long.</span>
                            </div>
                            <div className='clean_btn'>
                                <button>Learn more</button>
                            </div>
                        </div>
                        <div className='clean__img'>
                            <img src={clean} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
import "../Clean/Clean.scss"

export default Clean