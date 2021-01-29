import React,{useRef} from 'react'
import { connect } from 'react-redux';
import { Link , useHistory } from 'react-router-dom';
import {RegisterUser} from '../redux/actions';

import Layout from '../components/Layout'
import { IProps, IState, IUser } from '../models/interfaces';
import { useLogin } from '../hooks/Fetching';

import '../styles/pages/auth.scss';
const Login:React.FC<IProps> = (props) => {
    const form = useRef(document.createElement('form'));
    const { user , RegisterUser } = props;
    
    const history = useHistory();
    if(user && user.auth){
        history.push('/user');
    }

    const handleSubmit = (e:any):void => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const email:any = formData.get('email');
        const password:any = formData.get('password');

        const data:IUser = {
            auth:true ,
            name: "Name User",
            email: email,
            password: password
        }
        const completed:boolean = useLogin(email , password);
        
        if(RegisterUser && completed ){
            RegisterUser({
                ...data
            });
            history.push('/');
        }
        
        console.log(data);
        
    }
    

    return (
        <Layout>
            <section className="auth__primordial">
                <section className="auth">
                    <h2 className="auth__title">Login</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <label htmlFor="email">
                            <input type="email" placeholder="Your Email" className="auth__input" name="email" required/>
                        </label>
                        <label htmlFor="password">
                            <input type="password" placeholder="Your password" className="auth__input" name="password" required/>
                        </label>
                        <button className="auth__button" type="submit">LOGIN</button>
                    </form>
                    <p className="auth__register">Aun no tienes cuenta? <Link to="/register">Registrate</Link> </p>
                </section>
            </section>        
        </Layout>
    )
}
const mapStateToProps  = (state:IState) => ({
    user: state.user
})
const mapDispatchToProps = {
    RegisterUser
}
export default connect(mapStateToProps ,mapDispatchToProps)(Login)
