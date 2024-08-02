import React from 'react'
import '../Testimotional/Testi.scss'
import img from '../asset/img.png'
import star from '../asset/Stars.png'
import stars from '../asset/stars5.png'
import boy from '../asset/bg.png'
import girl from '../asset/bg_girl.png'

const parts = [
    {
        id: 1,
        url: img,
        Image: star,
        title: " “Ilove it! No more air fresheners” ",
        name:"Luisa"
    },
    {
        id: 1,
        url: boy,
        Image: stars,
        title: " “Raccomended for everyone” ",
        name:"Edoardo"
    },
    {
        id: 1,
        url: girl,
        Image: star,
        title: " “Looks very natural, the smell is awesome” ",
        name:"Mart"
    }
]

const Testi = () => {
    return (
        <>
            <div className="testi__part">
                <div className="container">
                    <div className="testi__body">
                        <div className='testi__head'>
                            <h2>Testimonials</h2>
                            <p>Some quotes from our happy customers</p>
                        </div>
                        <div className='testi__wrapper'>
                            {
                                parts?.map((el) => (
                                    <div key={el.id} className="testi__collection">
                                        <div className='images'>
                                            <img src={el.url} alt="" />
                                            <img src={el.Image} alt="" />
                                        </div>
                                        <p>{el.title}</p>
                                        <span>{el.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testi