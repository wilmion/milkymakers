import { APIResponse, IProduct } from '../models/interfaces';

export const useProduct = (products:IProduct[] , id:number):Object=> {

    const product:IProduct = products.find((item:IProduct) => item.id == id) || {} ;

    return product;
}