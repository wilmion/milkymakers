import React from 'react'
import { IProps, IState } from '../models/interfaces'
import { connect } from 'react-redux'

import Layout from '../components/Layout';
import Products from '../components/Products';



const Home = (props:IProps) => {
    const {products , orders} = props;
    
    localStorage.setItem('orders' , JSON.stringify(orders));

    return (
        <Layout>
            <h2 className="main__title">Start picking your treats</h2>
            <section className="content">
                <section className="products">
                    <Products products={products} />
                </section>
            </section>
                  
        </Layout>
        
    )
}
const mapStateToProps = (state:IState) => {
    return {
        products: state.products,
        orders: state.orders
    }
}
export default connect( mapStateToProps , null)(Home)
