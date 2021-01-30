import React from 'react'
import { IProps, IState } from '../models/interfaces'
import { connect } from 'react-redux'

import Layout from '../components/Layout';
import Products from '../components/Products';



const Home:React.FC<IProps> = (props) => {
    const {products} = props;
    return (
        <Layout titlePage="Home">
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
        products: state.products
    }
}
export default connect( mapStateToProps , null)(Home)
