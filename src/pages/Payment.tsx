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
    
    const onSuccess = (/*data:OnCaptureData*/e:any):void => {
        /*if(data.status === 'COMPLETED'){*/
            const dateTime:string = '10-25-12' //data.create_time;
            const paymentId:string = '2SAsas2A5FkiioBiuhaSAs5a26' //data.id;
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
        /*}*/
        
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
                    <button onClick={() => onSuccess} >Terminar Pago</button>
                </section>
                <p className="payment__error" >{errorMsg}</p>
                <p className="payment__error" >
                    Si desea ver la API de paypal solo posicionar su client ID de paypal
                    en el paypalOptions , al clonar este repositorio yo no lo coloque por
                    motivos de seguridad personal
                    <br/>
                    If you want to see the paypal API just position your paypal client ID
                    in the paypalOptions, when I cloned this repository I did not put it by
                    personal safety reasons
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
