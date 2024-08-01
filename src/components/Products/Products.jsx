import React from 'react'
import "../Products/Products.scss"
import rasm from '../asset/image 1.png'
import rasm2 from '../asset/image 2.png'

const data = [
    {
        id: 1,
        url: rasm,
        title: "Spiced Mint",
        price: 9.99
    },
    {
        id: 2,
        url: rasm2,
        title: "Sweet Straweberry",
        price: "9.99 $"
    },
    {
        id: 3,
        url: rasm,
        title: "Cool Blueberries",
        price: 9.99
    },
    {
        id: 4,
        url: rasm2,
        title: "Juicy Lemon",
        price: "9.99 $"
    },
    {
        id: 5,
        url: rasm,
        title: "Product name",
        price: 9.99
    },
    {
        id: 6,
        url: rasm2,
        title: "Fragrant Cinnamon",
        price: "9.99 $"
    },
    {
        id: 7,
        url: rasm,
        title: "Summer Cherries",
        price: 9.99
    },
    {
        id: 8,
        url: rasm2,
        title: "Clean Lavander",
        price: "9.99 $"
    }
]



const Products = () => {
    return (
        <>
            <div className="container">
                <div className="product__body">
                    <div className='product__head'>
                        <h3>Products</h3>
                        <p>Order it for you or for your beloved ones </p>
                    </div>
                    <div className='product__wrapper'>
                        {
                            data?.map((el) => (
                                <div key={el.id} className="product__collection">
                                    <div className='images'>
                                        <img src={el.url} alt="" />
                                    </div>
                                    <p>{el.title}</p>
                                    <span>{el.price}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products