import React , {useRef , useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import { connect } from 'react-redux';
import { RegisterUser } from '../redux/actions';
import { useRegister } from '../hooks/Fetching';
import Layout from '../components/Layout'

import '../styles/pages/auth.scss';
import { IProps, IState } from '../models/interfaces';

const Register:React.FC<IProps> = (props) => {
    const [error , setError] = useState<string>('');
    const form = useRef(document.createElement('form'));
    const button = useRef(document.createElement('button'))
    const { RegisterUser , user } = props;
    const history = useHistory();

    if(user && user.auth){
        history.push('/user');
    }

    const handleSubmit = (e:any):void => {
        e.preventDefault();
        const formData = new FormData(form.current);
        const email:string = String(formData.get('email')) ;
        const password:string = String(formData.get('password'));

        const data : any = {
            auth: true,
            name: formData.get('name') ,
            email: email,
            password: 'NOT USED',
        }
    
        const completed : boolean = useRegister( email , password , data )
        if(RegisterUser && completed){
            RegisterUser({
                ...data
            })
            history.push('/');
        }else{
            setError('An error has occurred while registering your account, verify that the account you have entered has not been created previously')
        }
    }

    const handleValidate = ():void => {
        const formData = new FormData(form.current);
        const pass:string = String(formData.get('password')) ;
        const Rpass:string = String(formData.get('repeatpassword')) ;
        if(pass === Rpass){
            button.current.disabled = false;
        }else{
            button.current.disabled = true;
        }
    }

    return (
        <Layout titlePage="Register">
            <section className="auth__primordial">
                <section className="auth">
                    <h2 className="auth__title">REGISTER</h2>
                    <form onSubmit={handleSubmit} ref={form}>
                        <label htmlFor="name">
                            <input type="text" placeholder="Your name" className="auth__input" name="name" required/>
                        </label>
                        <label htmlFor="email">
                            <input type="email" placeholder="Your Email" className="auth__input" name="email" required/>
                        </label>
                        <label htmlFor="password">
                            <input type="password" onChange={handleValidate} placeholder="Your password" className="auth__input" name="password" required/>
                        </label>
                        <label htmlFor="repeatpassword">
                            <input type="password" onChange={handleValidate} placeholder="Repeat password" className="auth__input" name="repeatpassword" required/>
                        </label>
                        <button ref={button} className="auth__button" type="submit" disabled>Register</button>
                    </form>
                    <p className="auth__register">Ya tienes cuenta? <Link to="/login">Inicia sesion</Link> </p>
                    <p className="auth_errorMesagge">{error}</p>
                </section>
            </section>        
        </Layout>
    )
}
const mapDispatchToProps = ({
    RegisterUser,
})
const mapStateToProps = (state:IState) => ({
    user: state.user
})

export default connect(mapStateToProps , mapDispatchToProps)(Register)
