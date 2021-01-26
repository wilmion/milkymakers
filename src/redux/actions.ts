import { IDeliveryDates, IProduct } from '../models/interfaces';

export const addToCart = (payload:IProduct) => ({
    type: 'ADD_TO_CART',
    payload,
});

export const setDeliveryDates = (payload:IDeliveryDates ) => ({
    type: 'SET_DELIVERY_DATES',
    payload,
}) 