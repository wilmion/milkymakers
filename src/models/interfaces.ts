import React from 'react'

export interface IProduct {
    title:string;
    description:string;
    image:string;
    children?:React.ReactNode;
    price:number;
    newProduct:boolean;
    id:number;
}

export interface APIResponse {
    loading: boolean;
    error: string | null ;
    data: {
        data: {
            cart: Array<any>,
            products: IProduct[]
        }
    };
}