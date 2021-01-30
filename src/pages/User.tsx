import React from 'react'
import { connect } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import { LogOut } from '../redux/actions';

import Layout from '../components/Layout'
import { IProps, IState, IUser, Order } from '../models/interfaces'

import '../styles/pages/user.scss';

const User:React.FC<IProps> = (props) => {
    const {user , orders, LogOut} = props;
    const history = useHistory();
    
    if(!user || !orders || !LogOut){
        return <></>;
    }

    if(user && !user.auth){
        history.push('/login');
    }

    const logOut = ():void => {
        const data:any = {
            auth:false,
            name:null,
            email: null,
            password: null
        }
        LogOut({
            ...data
        });
        history.push('/');
    }

    return (
        <Layout titlePage={String(user.name)}>
            <section className="user">
                <section className="user-information">
                    <h2 className="user-information__title">@{user.name}</h2>
                    <p className="user-information__email">{user.email}</p>
                </section>
                <section className="user-orders">
                    <h2 className="user-orders__title">Your Orders</h2>
                    {
                        orders.length === 0 ?
                        <p className="user-orders__empy">No hay Ordenes en su cuenta</p> :
                        orderMap(orders)
                    }
                </section>
                <button className="user__button" onClick={logOut} >Log Out</button>
            </section>
        </Layout>
    )
}

const mapStateToProps = (state:IState) =>  {
    return {
        orders: state.orders,
        user: state.user
    }
}
const mapDispacthToProps = {
    LogOut
}
const orderMap = (orders:Order[]):JSX.Element => {
    return (
        <>
        {
            orders.map(order => {
                let productsN:number = 0;
                order.products.forEach(product => {
                    productsN += product.length;
                })
                return (
                    <section key={order.id} className="user-orders__item">
                        <p className="user-orders__item__information">Price : {order.amountTotal}</p>
                        <p className="user-orders__item__information">Day : {order.dateTime}</p>
                        <p className="user-orders__item__information">Products : {productsN}</p>
                        <Link className="user-orders__item__button" to={`/user/order/${order.identifiquer}`}>More Information</Link>
                    </section>
                )
            })
        }
        </>
    )
}
export default connect(mapStateToProps,mapDispacthToProps)(User)
