import React from 'react'
import './product.css'

function Product(props) {
    return (
        <div className="product">
            <div className="product__name">{props.product.name}</div>
            <div className="product__price">price: {props.product.price.toLocaleString("en-US",{style:"currency",currency:"USD"})}</div>
            <div className="product__desc">{props.product.description}</div>
        </div>
    )
}
export default Product 