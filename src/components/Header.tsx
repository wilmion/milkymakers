import React , {useRef} from 'react'
import { NavLink} from 'react-router-dom';
import {AiOutlineSearch , AiOutlineMenu , AiFillCloseCircle} from 'react-icons/ai';

import '../styles/components/header.scss';

const Header= (props:any) => {
    
    const {onChange , onClick ,searching} = props;
    const input_:React.MutableRefObject< null | HTMLInputElement> = useRef(null);
    const nav_:React.MutableRefObject<HTMLElement> = useRef(document.createElement('section'));

    const value_input:string = input_.current !== null? input_.current.value.toLowerCase() : '';

    const showNav = (show:boolean) => ():void => {
        if(show){
            nav_.current.style.transform = 'translateX(0)';
        }else{
            nav_.current.style.transform = 'translateX(-100%)';
        }
    }

    return (
        <header className="header">
            <section ref={nav_} className="header-navigation_phone">
                <AiFillCloseCircle  className="header-navigation_phone__close" size="20px" color="white" onClick={showNav(false)}/>
                <NavLink to="/user" activeClassName="activePage">User Configurations</NavLink>
                <NavLink exact to="/" activeClassName="activePage">Home</NavLink>
                <NavLink to="/checkout/cart" activeClassName="activePage">Cart</NavLink>
            </section>
            <section className='header-show'>
                <AiOutlineMenu onClick={showNav(true)} className="header-show__icon" color="white" size="20px" />
                {
                searching ? <input ref={input_} className="header-show__search" type="text" placeholder="Buscar un producto" onChange={onChange(value_input)} /> : <h1 className='header-show__title'>MilkyMakers</h1>
                }
                <div className="header-show__icon">
                    <AiOutlineSearch color="white" size="14px" onClick={onClick} />
                </div>  
                
            </section> 
        </header>
        
    )
}

export default Header;
