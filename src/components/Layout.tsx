import React ,{useState} from 'react';
import { IProduct, IProps } from '../models/interfaces';
import { connect } from 'react-redux'

import Header from './Header';
import Product from './Product';
import '../styles/pages/home.scss';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Layout:React.FC<IProps> = (props) => {
    const {children , products , titlePage} = props;

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
            <Helmet>
                <meta name="description" content="Milk Makers the online store of cookies, enter and order"/>
                <title>{titlePage} - Milky Makers</title>
                <link rel="shortcut icon" href="https://firebasestorage.googleapis.com/v0/b/milky-makers.appspot.com/o/favicon.png?alt=media&token=1dd98a56-ad17-4fc3-82bd-881c4f3814e1" type="image/x-icon" />
            </Helmet>
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
