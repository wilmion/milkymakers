import React from 'react'
import { Link } from 'react-router-dom';
import { IProduct, IProps } from '../models/interfaces'
import { connect } from 'react-redux'

import Layout from '../components/Layout';
import Product from '../components/Product';



const Home = (props:IProps) => {
    const {products} = props;
    return (
        <Layout>
            <h2 className="main__title">Start picking your treats</h2>
            <section className="content">
                <section className="products">
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
                        </Link>)
                    }
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
