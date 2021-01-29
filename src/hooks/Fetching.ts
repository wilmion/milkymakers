import { IState, IUser } from '../models/interfaces';
import { store } from '../index';
import { setOrders , addToCart } from '../redux/actions';
export const useLogin = (email:string , password:string):boolean => {
    const data:string | null = localStorage.getItem(`authdata?e=${email}&p=${password}`);
    if(!data ){
        return false;
    }

    const orders:any = getDataAuth('orders' , email , password);
    const cart : any = getDataAuth('cart' , email , password);

    store.dispatch(setOrders(orders));
    store.dispatch(addToCart(cart));

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
    console.log('register' , value);

    if(isAuth){
        return false;
    }
    localStorage.setItem(`authdata?e=${email}&p=${password}` , JSON.stringify(value));
    localStorage.setItem(`verifiauth?e=${email}` , JSON.stringify(value));

    const state:IState = store.getState();
    postDataAuth('orders' , email , password , []);
    postDataAuth('cart' , email , password , state.cart);
    
    return true;

}

const postDataAuth = (id:string , email:string , password:string , value:any) => {
    localStorage.setItem(`${id}auth?e=${email}&p=${password}` , JSON.stringify(value));
}



