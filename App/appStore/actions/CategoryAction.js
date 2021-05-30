import axios from 'axios';
import React from 'react'
import { LoadCategoryConfig } from '../AxiosConfigs/CategoriesConfig';
import { LISTCategories,LISTFAIED } from '../types';
export function ReteriveCategories() {
    return axios(LoadCategoryConfig);
}
export function GETCategoriesLIST(){
    return function(dispatch){
        return new Promise((resolve,rej)=>{
        return ReteriveCategories().then(
            result=>{
                try{
                if(result.data=='<html><meta http-equiv="refresh" content="0;/.well-known/captcha/"></meta></head></html>')
                {
                    resolve(dispatch({type:LISTFAIED,payload:false}))
                }else if(result.data[0]["id"]){
                    resolve(dispatch({type:LISTCategories,payload:result.data}))
                }else{
                    resolve(dispatch({type:LISTFAIED,payload:false}))
                }
            }catch(e){
                resolve(dispatch({type:LISTFAIED,payload:false}))
            }
                },
            error=>{console.log(error);resolve(dispatch({type:LISTFAIED,payload:error.message}))}
        )
    })
    }
}


