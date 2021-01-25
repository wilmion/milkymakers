import React from 'react'

export interface IProduct {
    title?:string ;
    description?:string;
    image?:string;
    children?:React.ReactNode;
    price?:number;
    newProduct?:boolean;
    id?:number;
}

export interface IProps extends IProduct {
    details?:boolean;
    Nameclass?:string;
    modifiquer?:string;
    products?:IProduct[];
}