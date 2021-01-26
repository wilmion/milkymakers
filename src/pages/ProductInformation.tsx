import React from 'react';
import { useParams , useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions'

import { useProduct } from '../hooks/useProduct';
import { IProduct, IProps, IState } from '../models/interfaces';

import Product from '../components/Product';
import Layout from '../components/Layout';

import '../styles/pages/product_information.scss';

const ProductInformation:React.FC = (props:IProps) => {
    const {products , addToCart} = props;
    const params:{id:string} = useParams();
    const history = useHistory();

    const product:IProduct = useProduct( products || [] , Number(params.id) ); 

    const handleAddToCart = ():void => {
        if(addToCart){
            addToCart({
                ...product,
                length: 1,
            })
            history.push('/checkout/cart');
        }
    }

    return (

        <Layout>
            <h2 className="main__title">Start picking your treats</h2>
            <section className="product-information">
                <Product Nameclass="product-information-details" details={true} {...product}/>
                <button className="product-information__button" onClick={handleAddToCart}>ADD TO BAG</button>
            </section>     
        </Layout>

    )
}
const mapStateToProps = (state:IState) => {
    return {
        products: state.products,
    }
}
const mapDispatchToProps = {
    addToCart,
}
export default connect(mapStateToProps , mapDispatchToProps)(ProductInformation)
