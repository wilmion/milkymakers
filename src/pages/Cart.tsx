import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout'
import {RiLuggageCartFill} from 'react-icons/ri';
import { IProps, IState } from '../models/interfaces';

import '../styles/pages/cart.scss';

const Cart:React.FC<IProps> = (props) => {
    const { cart } = props;
    if(!cart){
        return <></>;
    }
    let totalPrice:number = 0;
    cart.forEach(item => {
        totalPrice += (item.price|| 1)*item.length;
    })
    return (
        <Layout titlePage="Cart">
            <section className="cart">
                 {
                    cart.length === 0?
                    <>
                        <p className="cart-notfound">Aun no hay productos en su carrito <br/> Empieze a comprar hoy!!!</p>
                        <RiLuggageCartFill className="cart-notfoundicon" size="50px" color="#E3097C" />
                    </> : cart.map(item => (
                    <section key={item.id}>
                        <section className="cart-product">
                            <img className="cart-product__image" src={item.image} alt={item.title}/>
                            <div className="cart-product__information">
                                <h2 className="cart-product__information__title">{item.title}</h2>
                                <h3 className="cart-product__information__price">{item.price} €</h3>
                                <p className="cart-product__information__cantidad">Quantity : {item.length}</p>
                            </div>
                        </section>
                        <section className="cart-next">
                            <p className="cart-next__parraf">Total : </p>
                            <p className="cart-next__price">{Math.round(totalPrice)} €</p>
                            <Link to="/checkout/form" className="cart-next__submit">Next</Link>
                        </section>
                        
                    </section>
                    ))
                 }

            </section>
        </Layout>
    )
}

const mapStateToProps = (state : IState):any => {
    return {
        cart: state.cart,
    }
}
export default connect( mapStateToProps, null)(Cart);
