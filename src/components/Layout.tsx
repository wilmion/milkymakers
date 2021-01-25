import React ,{useState} from 'react';
import { IProduct, IProps } from '../models/interfaces';
import { connect } from 'react-redux'

import Header from './Header';
import Product from './Product';
import '../styles/pages/home.scss';
import { Link } from 'react-router-dom';

const Layout:React.FC = (props:IProps) => {
    const {children , products} = props;

    const products_API:IProduct[] = products ? products : [];

    const [ searching , setSearching ] = useState(false);
    const [Fproducts , setProducts] = useState(products_API);
    
    const handleClickSearch = (e:any):void  => {
        setSearching(!searching);
    }

    const handleChange = (value:string) => ():void => {
        const filtered_Products:IProduct[] = products_API.filter((item:IProduct) => {
            if(item.title)
                return item.title.toLowerCase().includes(value);
        });
        setProducts(filtered_Products);
    } 
    return (
        <>
            <Header onChange={handleChange} onClick={handleClickSearch} searching={searching} />
            <main className="main">
                {
                    searching && Fproducts.length > 0? (
                        <section className='products'>
                            {Fproducts.map((product : IProduct) => 
                            <Link to={`/product/${product.id}`} key={product.id} onClick={() => setSearching(!searching)}>
                                <Product 
                                    details={false} 
                                    Nameclass="product"
                                    {...product}
                                />
                            </Link>)}
                        </section>
                    ) : children
                }
            </main>
        </>
    )
}
const mapStateToProps = (state:any) => {
    return {
        products: state.products,
    }
}
export default connect(mapStateToProps,null)(Layout)
