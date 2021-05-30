import React from 'react'
import { LISTPRODUCTS,LISTFAIED } from '../../types'
const initialState={
    List:'',
    loading:true,
    load_Error:false
}
function ProductReducer(state=initialState,action) {
switch(action.type){
    case LISTPRODUCTS:
        return{
            ...state,
            loading:false,
            load_Error:false,
            List:action.payload
           } 
           case LISTFAIED:{
               return{
                   ...state,
                   List:action.payload,
                   load_Error:true,
                   loading:false
               }
           }
    default:
        return {...state};
}
}

export default ProductReducer
