import React,{useContext} from 'react'
import { Context } from '../Context/Context';
import { APIResponse, IProduct } from '../models/interfaces'

import Layout from '../components/Layout';
import Product from '../components/Product';



const Home:React.FC = () => {
    const dataApi: APIResponse = useContext(Context);
    console.log(dataApi)

    return (
        <Layout>
            <h2 className="main__title">Start picking your treats</h2>
            <section className="products">
                {
                    !dataApi.loading ? (
                        dataApi.data.data.products.map((item:IProduct) => <Product key={item.id} {...item} />)
                    )   
                    : ''
                }
                

            </section>      
        </Layout>
        
    )
}

export default Home
