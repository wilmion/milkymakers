import { IState, IUser } from '../models/interfaces';
import { store } from '../index';
import { setData } from '../redux/actions';
import { RiEmotionSadFill } from 'react-icons/ri';
let pasword_current:string = "";
export const useLogin = (email:string , password:string):boolean => {
    const data:string | null = localStorage.getItem(`authdata?e=${email}&p=${password}`);
    if(!data ){
        return false;
    }

    pasword_current = password;

    const orders:any = getDataAuth('orders' , email , password);
    const cart : any = getDataAuth('cart' , email , password);
    const user_data:any = JSON.parse(data);

    store.dispatch(setData(orders , 'orders' ));
    store.dispatch(setData(cart , 'cart' ));
    store.dispatch(setData(user_data , 'user' ));

    console.log(store.getState())

    return true;
}

const getDataAuth = ( id:string , email:string , password:string ):JSON => {
    const data:string = localStorage.getItem(`${id}auth?e=${email}&p=${password}`) || '';
    console.log('GET')
    return JSON.parse(data);
}

//register 

export const useRegister = (email:string , password:string , value:IUser):boolean => {
    const isAuth:string | null = localStorage.getItem(`verifiauth?e=${email}`);

    if(isAuth){
        return false;
    }
    value.password = 'NO MOSTRABLE';
    pasword_current = password;
    localStorage.setItem(`authdata?e=${email}&p=${password}` , JSON.stringify(value));
    localStorage.setItem(`verifiauth?e=${email}` , JSON.stringify(value));

    const state:IState = store.getState();
    postDataAuth('orders' , email , password , []);
    postDataAuth('cart' , email , password , state.cart);
    
    return true;

}

const postDataAuth = (id:string , email:string , password:string , value:any):void => {
    localStorage.setItem(`${id}auth?e=${email}&p=${password}` , JSON.stringify(value));
}

export const usePostDataUser = (id:'cart' | 'orders' , email:string):void => {
    const state:IState = store.getState();
    if(email !== 'null'){
        localStorage.setItem(`${id}auth?e=${email}&p=${pasword_current}` , JSON.stringify(state[id]));
    }
}



