import React  from 'react'
import { IProps } from '../models/interfaces';
import '../styles/components/product.scss';
const Product = (props:IProps) => {
    const { title , image , price , newProduct , description , details , Nameclass , modifiquer} = props;

    return (
        <article className={`${Nameclass} ${Nameclass}--${modifiquer}`}>
            {
                newProduct &&
                <p className={`${Nameclass}__new`}>New</p>
            }  
            <img className={`${Nameclass}__image `} src={image} alt={title}/>
            <h2 className={`${Nameclass}__title`}>{title}</h2>
            <p className={`${Nameclass}__price`}>{price} €</p>
            {details && <p className="product__description">{description}</p> }
        </article>
    )
}

export default Product;
