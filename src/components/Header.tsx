import React , {useState , useContext , useRef} from 'react'
import {AiOutlineSearch , AiOutlineMenu} from 'react-icons/ai';

import { Context } from '../Context/Context';
import { APIResponse, IProduct } from '../models/interfaces';

import '../styles/components/header.scss';

const Header= (props:any) => {
    
    const {onChange , onClick ,searching} = props;
    const input_:React.MutableRefObject< null | HTMLInputElement> = useRef(null);

    const value_input:string = input_.current !== null? input_.current.value.toLowerCase() : '';

    return (
        <header className='header'>
            <div className="header__icon">
                <AiOutlineMenu color="white" size="20px" />
            </div>
            {
               searching ? <input ref={input_} type="text" placeholder="Buscar un producto" onChange={onChange(value_input)} /> : <h1 className='header__title'>MilkyMakers</h1>
            }
            <div className="header__icon">
                <AiOutlineSearch color="white" size="14px" onClick={onClick} />
            </div>  
        </header>
    )
}

export default Header;
