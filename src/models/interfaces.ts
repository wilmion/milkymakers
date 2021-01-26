import React from 'react'

export interface IProduct {
    title?:string ;
    description?:string;
    image?:string;
    children?:React.ReactNode;
    price?:number;
    newProduct?:boolean;
    id?:number;
    length?:any;
}

export interface IProps extends IProduct {
    details?:boolean;
    Nameclass?:string;
    modifiquer?:string;
    products?:IProduct[];
    addToCart?: (payload:IProduct) => any; 
    setDeliveryDates?: (payload: IDeliveryDates) => any;
    cart?: IProduct[];
    user?: any;
}

export interface IState{
    user: {},
    cart: IProduct[],
    products: IProduct[]
}
export interface IActions {
    type: string,
    payload: any
}

export interface IDeliveryDates {
    name: string,
    cp: string,
    address: string,
    departament: string,
    city: string
}