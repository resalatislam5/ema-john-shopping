import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className='Cart-container'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${cart.price}</p>
            <p>Total Shipping Charge: ${cart.length}</p>
            <p>Tax: ${cart.length}</p>
            <h6>Grand Total: ${cart.length}</h6>
            <div className='btn-container'>
                <button className='btn-clear'>Clear Cart</button>
                <button className='btn-review'>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;