import React from 'react'
import { connect } from 'react-redux';
import { useParams , Link} from 'react-router-dom'

import Layout from '../components/Layout'
import { useOrderProductsTotal } from '../hooks/useOrder';

import { IProduct, IProps, IState, Order } from '../models/interfaces'
import '../styles/pages/order.scss';

const OrderPage:React.FC<IProps> = (props) => {
    const { id } = useParams<any>();
    const { orders } = props;
    
    
    if(!orders){
        return <></>;
    }
    const FilteredOrder:Order | undefined = orders.find(item => item.identifiquer === Number(id));
    if(!FilteredOrder){
        return <></>;
    }
    const productsTotal:number =  useOrderProductsTotal(FilteredOrder);

    return (
        <Layout>
            <section className="order">
                <h2 className="order__title">Order N° {orders.indexOf(FilteredOrder)}</h2>
                <p className="order__indentify">IDENTIFIQUER : <br/> {FilteredOrder.id}</p>
                {mapProducts(FilteredOrder.products)}
                <p className="order__price">Total Price : {FilteredOrder.amountTotal} $</p>
                <p className="order__products">Date Time: {FilteredOrder.dateTime} </p>
                <p className="order__products">Total Products: {productsTotal}</p>
                <Link to="/" className="order__button">Back to Home</Link>
            </section>
        </Layout>
    )
}
const mapStateToProps = (state:IState) => ({
    orders: state.orders,
});
export default connect( mapStateToProps , null )(OrderPage);

const mapProducts = (products:IProduct[]):JSX.Element => {

    return (
        <>
        {
            products.map(item => (
                <section key={item.id} className="order-item">
                    <img src={item.image} alt={item.title} />
                    <h2 className="order-item__title">{item.title}</h2>
                    <p className="order-item__price">Price : {item.price} $</p>
                    <p className="order-item__cantidad">Quantity : {item.length} </p>
                    <Link to={`/product/${item.id}`} className="order-item__button" >View Product</Link>
                </section>
            ))
        }
        </>
    )

}
