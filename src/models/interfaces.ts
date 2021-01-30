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
    orders?:Order[];
    addToCart?: (payload:IProduct) => any; 
    setDeliveryDates?: (payload: IDeliveryDates) => any;
    setOrders?: (payload: Order) => any;
    RegisterUser?: (payload: IUser) => any;
    LogOut?: (payload: IUser) => any;
    cart?: IProduct[];
    user?: IUser;
    titlePage? : string;
}

export interface IState{
    user: IUser,
    cart: IProduct[],
    orders: Order[],
    products: IProduct[]
}
export interface IActions {
    type: string,
    payload: any,
}

export interface IDeliveryDates {
    name: string,
    cp: string,
    address: string,
    departament: string,
    city: string
}
export interface Order{
    products: IProduct[]
    amountTotal:number,
    id: string,
    dateTime: string,
    identifiquer:number,
    delivery: IDelivery
}
export interface IDelivery {
    name:string,
    address:string,
    cp:string,
    city:string,
    departament:string
}
export interface IUser{
    auth: boolean;
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
    name: FormDataEntryValue | null;
    delivery: IDelivery
}