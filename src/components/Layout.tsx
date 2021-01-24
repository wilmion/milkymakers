import React ,{useState , useContext} from 'react'
import Header from './Header';
import '../styles/pages/home.scss';

import { APIResponse, IProduct } from '../models/interfaces';
import { Context } from '../Context/Context';
import Product from './Product';

const Layout:React.FC = (props) => {
    const {children} = props;

    const dataApi:APIResponse = useContext(Context); 
    const products_API:IProduct[] = dataApi.data.data.products ;

    const [ searching , setSearching ] = useState(false);
    const [products , setProducts] = useState(products_API);
    
    const handleClickSearch = (e:any):void  => {
        setSearching(!searching);
    }

    const handleChange = (value:string) => ():void => {
        const filtered_Products:IProduct[] = products_API.filter((item:IProduct) => item.title.toLowerCase().includes(value) );
        setProducts(filtered_Products);
    } 
    return (
        <>
            <Header onChange={handleChange} onClick={handleClickSearch} searching={searching} />
            <main className="main">
                {
                    searching && products.length > 0? (
                        <section className='products'>
                            {products.map((product : IProduct) => <Product key={product.id} {...product}/>)}
                        </section>
                    ) : children
                }
            </main>
        </>
    )
}

export default Layout
