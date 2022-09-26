import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({addToCart,product}) => {
    const {img,name,price,ratings,seller}=product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img ? img:'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'} alt="" />
            </div>
            <div className='product-item'>
                <h3>{name}</h3>
                <h5><span>Price: $</span>{price}</h5>
                <div>
                    <p><span>Manufacturer: </span>{seller}</p>
                    <p><span>Rating: </span>{ratings}</p>
                </div>
            </div>
            <button onClick={()=>addToCart(product)}>Add to Cart<FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;