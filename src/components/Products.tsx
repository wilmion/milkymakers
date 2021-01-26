import React from 'react'
import { Link } from 'react-router-dom';

import { IProduct, IProps } from '../models/interfaces'
import Product from './Product';

const Products = (props:IProps) => {
    const { products } = props;
    return (
        <>
            {
                products &&       
                products.map((item:IProduct) => 
                    <Link to={`/product/${item.id}`} key={item.id} >
                        <Product 
                            modifiquer={ item.id && item.id%2? 'left' : 'rigth'}
                            details={false} 
                            Nameclass="product"
                            {...item} 
                        />
                    </Link>
                )
            }
        </>
    )
}

export default Products
