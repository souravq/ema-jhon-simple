import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    
    const productlist=fakeData.slice(0,10);
    
    const [product, setProduct] = useState(productlist);
    const [cart, setCart] = useState([]);
    function addEventHandle(product){
        //console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        product.map(pd=><Product 
                            addEventHandle={addEventHandle}
                            product={pd}>

                            </Product>)
                    }
                </ul>

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
            
        </div>
    );
};

export default Shop;
