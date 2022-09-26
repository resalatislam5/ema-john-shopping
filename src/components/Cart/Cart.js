import React, { useState } from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    let price = 0;
    let shipping = 0;
    for (const product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
    }
    const tax =(price * 0.1).toFixed(2);
    const total = price + shipping + parseFloat(tax);
    return (
        <div className='Cart-container'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${total}</h6>
            <div className='btn-container'>
                <button className='btn-clear'>Clear Cart</button>
                <button className='btn-review'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;