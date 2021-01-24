import React from 'react'
import { IProduct } from '../models/interfaces';
import '../styles/components/product.scss';
const Product = (props:IProduct) => {
    const { title , image , price , newProduct , description } = props;
    return (
        <article className="product">
            {
                newProduct &&
                <p className="product__new">New</p>
            }  
            <img className="product__image" src={image} alt={title}/>
            <h2 className="product__title">{title}</h2>
            <p className="product__price">{price} €</p>
        </article>
    )
}

export default Product;
