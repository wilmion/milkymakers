import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { useProduct } from '../hooks/useProduct';
import { IProduct, IProps } from '../models/interfaces';

import Product from '../components/Product';
import Layout from '../components/Layout';

import '../styles/pages/product_information.scss';

const ProductInformation:React.FC = (props:IProps) => {
    const {products} = props;
    const params:{id:string} = useParams();

    const product:IProduct = useProduct( products || [] , Number(params.id) ); 

    return (

        <Layout>
            <h2 className="main__title">Start picking your treats</h2>
            <section className="product-information">
                <Product Nameclass="product-information-details" details={true} {...product}/>
                <button className="product-information__button">ADD TO BAG</button>
            </section>     
        </Layout>

    )
}
const mapStateToProps = (state:any) => {
    return {
        products: state.products,
    }
}
export default connect(mapStateToProps , null)(ProductInformation)
