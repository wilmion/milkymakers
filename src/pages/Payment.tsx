import React,{useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { setOrders } from '../redux/actions';

import { IProps, IState } from '../models/interfaces'

import Layout from '../components/Layout';
import { PayPalButton , PaypalOptions , ButtonStylingOptions, OnCaptureData } from 'react-paypal-button';

import '../styles/pages/payment.scss';

const Payment = (props:IProps) => {
    const { cart , setOrders} = props;

    const [errorMsg , setErrorMsg] = useState('');

    const history = useHistory();

    if(!cart || !setOrders){
        return <></>;
    }

    const paypallOptions:PaypalOptions = {
        clientId:'AaFevmHFJUOBMmkhEH5FT63qxd3EmpUGon9iRUDfeSWMwKmBNkEI_yL6AQhNDCtvHyyXhPpMYZnzK-no',
        currency: 'EUR',
        intent: 'capture'
    }
    const buttonStyles:ButtonStylingOptions = {
        layout: 'vertical',
        shape: 'pill',
        label:'paypal'
    }   


    let totalPrice:number = 0;
    let totalProducts : number = 0;
    cart.forEach(item => {
        totalPrice += (item.price|| 1)*item.length;
        totalProducts+= item.length;
    })

    const onSuccess = (data:OnCaptureData):void => {
        if(data.status === 'COMPLETED'){
            const dateTime:string = data.create_time;
            const paymentId:number = Number(data.id);
            const amount:number = Math.round(totalPrice);

            setOrders({
                products: cart,
                amountTotal: amount,
                id: paymentId,
                dateTime: dateTime
            })
            history.push('/checkout/success');
        }
        
    }
    const onError = (error:string) : void => {
        setErrorMsg('Ha ocurrido un error al efectuar su pago : ' + error);
    }
    const onCancel = () : void => {
        setErrorMsg('Un momento!! ya se desanimo? , no olvide que su barriga no estara muy contenta de su elección');
    }
    return (
        <Layout>
            <section className="payment">
                <h2 className="payment__title">Payment</h2>
                <p className="payment__total">{Math.round(totalPrice)} €</p>
                <p className="payment__products">{totalProducts}</p>
                <section className="payment__button">
                    <PayPalButton 
                        paypalOptions={paypallOptions}
                        buttonStyles={buttonStyles}
                        amount={Math.round(totalPrice)}
                        onPaymentSuccess={onSuccess}
                        onPaymentError={onError}
                        onPaymentCancel={onCancel}
                    />
                </section>
                <p className="payment__error" >{errorMsg}</p>
            </section>
        </Layout>
    )
}

const mapStateToProps = (state:IState) => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = {
    setOrders
}

export default connect( mapStateToProps , mapDispatchToProps)(Payment)
