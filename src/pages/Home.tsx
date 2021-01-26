import React from 'react'
import { IProps } from '../models/interfaces'
import { connect } from 'react-redux'

import Layout from '../components/Layout';
import Products from '../components/Products';



const Home = (props:IProps) => {
    const {products} = props;
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
const mapStateToProps = (state:any) => {
    return {
        products: state.products,
    }
}
export default connect( mapStateToProps , null)(Home)
