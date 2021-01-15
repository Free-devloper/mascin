import React from 'react'
import { LISTPRODUCTS } from '../../types'
const initialState={
    List:''
}
function ProductReducer(state=initialState,action) {
switch(action.type){
    case LISTPRODUCTS:
        return{
            ...state,
            List:action.payload
           } 
    default:
        return {...state};
}
}

export default ProductReducer
