import React from 'react';
import { useParams , useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions'
import { usePostDataUser } from '../hooks/Fetching';

import { useProduct } from '../hooks/useProduct';
import { IProduct, IProps, IState } from '../models/interfaces';

import Product from '../components/Product';
import Layout from '../components/Layout';

import '../styles/pages/product_information.scss';

const ProductInformation:React.FC<IProps> = (props) => {
    const {products , addToCart , user} = props;
    const params:{id:string} = useParams();
    const history = useHistory();

    const product:IProduct = useProduct( products || [] , Number(params.id) ); 

    const handleAddToCart = ():void => {
        if(addToCart && user){
            addToCart({
                ...product,
                length: 1,
            })
            usePostDataUser('cart' , String(user.email))
            history.push('/checkout/cart');
        }
    }

    return (

        <Layout titlePage={product.title}>
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
        user: state.user
    }
}
const mapDispatchToProps = {
    addToCart,
}
export default connect(mapStateToProps , mapDispatchToProps)(ProductInformation)
