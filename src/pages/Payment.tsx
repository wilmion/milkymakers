import React,{useState} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { setOrders } from '../redux/actions';
import { usePostDataUser } from '../hooks/Fetching';

import { IProps, IState } from '../models/interfaces'

import Layout from '../components/Layout';
import { PayPalButton , PaypalOptions , ButtonStylingOptions, OnCaptureData } from 'react-paypal-button';

import '../styles/pages/payment.scss';

const Payment:React.FC<IProps> = (props) => {
    const { cart , setOrders , user , orders} = props;

    const [errorMsg , setErrorMsg] = useState<string>('');

    const history = useHistory();

    if(!cart || !setOrders || !user || !orders){
        return <></>;
    }
    if(!user.auth){
        history.push('/login');
    }
    const paypallOptions:PaypalOptions = {
        clientId:'',
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
            const paymentId:string = data.id;
            const amount:number = Math.round(totalPrice);

            setOrders({
                products: cart,
                amountTotal: amount,
                id: paymentId,
                identifiquer: orders.length ,
                dateTime: dateTime,
                delivery: user.delivery
            })
            usePostDataUser('orders' , String(user.email));
            usePostDataUser('cart' , String(user.email));

            history.push('/checkout/success');
        }
        
    }
    const onError = (error:string) : void => {
        setErrorMsg('An error occurred while making your payment: ' + error);
    }
    const onCancel = () : void => {
        setErrorMsg('Just a moment!! Are you discouraged? , do not forget that your belly will not be very happy with your choice');
    }
    return (
        <Layout titlePage="Payment">
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
                <p className="payment__error" >
                    Por favor no hacer ningun pago real , si desea 
                    testear la pagina , clone el repositorio por favor 
                    y uitize la tarjeta virtual 4242 4242 4242 4242 , solo es una pagina de desmostracion
                    <br/>
                    Please do not make any actual payment, if you wish
                    test the page, clone the repository please
                    and use the virtual card 4242 4242 4242 4242, it is only a demo page
                </p>
            </section>
        </Layout>
    )
}

const mapStateToProps = (state:IState) => {
    return {
        cart: state.cart,
        user: state.user,
        orders: state.orders
    }
}
const mapDispatchToProps = {
    setOrders
}

export default connect( mapStateToProps , mapDispatchToProps)(Payment)
