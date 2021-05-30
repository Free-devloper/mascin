import axios from 'axios';
import React from 'react'
import { LoadProductsConfig } from '../AxiosConfigs/Products';
import { LISTPRODUCTS,LISTFAIED } from '../types';
export function ReteriveProducts() {
    return axios(LoadProductsConfig);
}
export function GETPRODUCTSLIST(){
    return function(dispatch){
        return new Promise((resolve,rej)=>{
        return ReteriveProducts().then(
            result=>{
                try{
                if(result.data==='<html><meta http-equiv="refresh" content="0;/.well-known/captcha/"></meta></head></html>')
                {
                    resolve(dispatch({type:LISTFAIED,payload:result.data}))
                }else if(result.data[0]["id"])
                {
                    resolve(dispatch({type:LISTPRODUCTS,payload:result.data}))
                }
                else{
                    resolve(dispatch({type:LISTFAIED,payload:result.data}))
                }
            }catch(e){
                resolve(dispatch({type:LISTFAIED,payload:e.message}))
            }
                },
            error=>{console.log(error);resolve(dispatch({type:LISTFAIED,payload:false}))}
        )
    })
    }
}


