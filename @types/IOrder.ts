import { IProduct } from './IProduct';


export interface IOrder extends IProduct {
    po?: string;
    qty?: number;
    address?: string;
}