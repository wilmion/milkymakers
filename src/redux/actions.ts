import { IDeliveryDates, IProduct, IUser, Order } from '../models/interfaces';

export const addToCart = (payload:IProduct) => ({
    type: 'ADD_TO_CART',
    payload,
});

export const setDeliveryDates = (payload:IDeliveryDates ) => ({
    type: 'SET_DELIVERY_DATES',
    payload,
}) 

export const setOrders = (payload:Order ) => ({
    type: 'SET_ORDERS',
    payload,
}) 
export const RegisterUser = (payload:IUser) => ({
    type: 'REGISTER',
    payload
});
export const LogOut = (payload:IUser) => ({
    type: 'LOG_OUT',
    payload
});