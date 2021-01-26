import React from 'react'
import { connect } from 'react-redux'

import { IProps, IState } from '../models/interfaces'

import Layout from '../components/Layout';

import '../styles/pages/payment.scss';

const Payment = (props:IProps) => {
    const {user , cart} = props;

    if(!cart ){
        return <></>;
    }

    let totalPrice:number = 0;
    let totalProducts : number = 0;
    cart.forEach(item => {
        totalPrice += (item.price|| 1)*item.length;
        totalProducts+= item.length;
    })

    return (
        <Layout>
            <section className="payment">
                <h2 className="payment__title">Payment</h2>
                <p className="payment__total">{totalPrice} €</p>
                <p className="payment__products">{totalProducts}</p>
                <p>Paypal button</p>
            </section>
        </Layout>
    )
}

const mapStateToProps = (state:IState) => {
    return {
        user: state.user,
        cart: state.cart
    }
}

export default connect( mapStateToProps , null)(Payment)
