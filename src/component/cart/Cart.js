import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    let total =0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total =total + product.price;
    }

    let shipping=0;
    if(total>35){
        shipping=0;
    }else if(total>15){
        shipping = 4;
    }else if(total>0){
        shipping= 12;
    }

    return (
        <div>
            <h1>This is Cart</h1>
            <h5>Order Summary {cart.length}</h5>
            <h3>Product price: {total}</h3>
            <h4>Shipping Cost: {shipping}</h4>
            <h3>Total Price : {total+shipping}</h3>
            
            
            
        </div>
    );
};

export default Cart;