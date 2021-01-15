import axios from 'axios';
import React from 'react'
import { LoadProductsConfig } from '../AxiosConfigs/Products';
import { LISTPRODUCTS } from '../types';
export function ReteriveProducts() {
    return axios(LoadProductsConfig);
}
export function GETPRODUCTSLIST(){
    return function(dispatch){
        return new Promise((resolve,rej)=>{
        return ReteriveProducts().then(
            result=>resolve(dispatch({type:LISTPRODUCTS,payload:result.data})),
            error=>{console.log(error);resolve(dispatch({type:LISTPRODUCTS,payload:false}))}
        )
    })
    }
}


