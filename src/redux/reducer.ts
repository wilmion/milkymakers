import { IActions, IState } from "../models/interfaces";

export const reducer = (state: IState | undefined , action:IActions):any => {
    if(state ){
        switch(action.type) {
            case 'LOG_OUT':
                return {
                    ...state,
                    user: action.payload
                }
            case 'REGISTER':
                return {
                    ...state,
                    user: action.payload
                }
            case 'SET_ORDERS':
                return {
                    ...state,
                    orders: [...state.orders , action.payload],
                    cart: []
                }
            case 'SET_DELIVERY_DATES':
                return {
                    ...state,
                    user: {...state.user , delivery: action.payload}  
                }
            case 'ADD_TO_CART':
                const repited = state.cart.find(item => item.id === action.payload.id);

                if(repited){
                    const index:number = state.cart.findIndex(item => item.id === action.payload.id) ;
                    state.cart[index].length += 1;
                    return {
                        ...state,
                        cart: state.cart
                    }
                }
                return {
                    ...state,
                    cart: [...state.cart , action.payload]
                }
                
            default:
                return state;
        } 
    }
    
}