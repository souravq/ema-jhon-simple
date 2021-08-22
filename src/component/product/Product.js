import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    //console.log(props);
    const {img, name, seller, price, stock}=props.product;
    return (

        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <h4>by {seller}</h4>
                <h5>$ {price}</h5>
                <h5>Only {stock} lest, order soon.</h5>
                <button className="order-btn" onClick={()=>props.addEventHandle(props.product)}><FontAwesomeIcon icon={faShoppingCart} />order here</button>
               

            </div>

        </div>

    );
};

export default Product;