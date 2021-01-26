import React  , { useState} from 'react'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { setDeliveryDates } from '../redux/actions';
import { IProps, IState } from '../models/interfaces';

import Layout from '../components/Layout'

import '../styles/pages/form.scss';


const Form:React.FC = (props:IProps) => {

    const { setDeliveryDates} = props;
    const [form , setValues] = useState({
        name: '',
        cp: '',
        address: '',
        departament: '',
        city: ''
    })
    
    const history = useHistory();

    const handleSubmit = (e:any):void => {
        e.preventDefault();
        if(setDeliveryDates){
            setDeliveryDates({
                ...form
            })
        }
        history.push('/checkout/payment');
    }
    const handleChange = (e:any):void => {
        setValues({
            ...form,
            [e.target.name] : e.target.value
        })
    }
    return (
        <Layout>
            <section className="form">
                <h2 className="form__title">Home Delivery Data</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <input type="text" onChange={handleChange} className="form-input" placeholder="Full Name" name="name" required/>
                    </label>
                    <label htmlFor="cp">
                        <input type="number" onChange={handleChange} className="form-input" placeholder="Postal Code" name="cp" required/>
                    </label>
                    <label htmlFor="address">
                        <input type="text" onChange={handleChange} className="form-input" placeholder="You Address" name="address" required/>
                    </label>
                    <label htmlFor="departament">
                        <input type="text" onChange={handleChange} className="form-input" placeholder="Departament" name="departament" required/>
                    </label>
                    <label htmlFor="city">
                        <input type="text" onChange={handleChange} className="form-input" placeholder="City" name="city" required/>
                    </label>
                    <button>Next</button>
                </form>
            </section>
        </Layout>
    )
}

const mapDispatchToProps = {
    setDeliveryDates,
}
export default connect(null , mapDispatchToProps)(Form)
