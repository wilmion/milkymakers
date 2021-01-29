import { Order } from '../models/interfaces';

export const useOrderProductsTotal = (order:Order ):number => {
    
    let productsTotal : number= 0;
    order.products.forEach(item => {
        productsTotal += item.length;
    })
    
    return productsTotal;

};