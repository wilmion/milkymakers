import React,{useRef} from 'react'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'

import '../styles/pages/auth.scss';
const Login = () => {
    const form = useRef(document.createElement('form'));


    const handleSubmit = (e:any):void => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            email: formData.get('email'),
            password: formData.get('password')
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

export default Login
