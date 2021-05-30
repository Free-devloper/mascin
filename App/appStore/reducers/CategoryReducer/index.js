import React from 'react'
import {LISTCategories,LISTFAIED} from '../../types'
const initialState={
    List:'',
    load_Error:false,
    loading:true,

}
function CategoryReducer(state=initialState,action) {
    switch(action.type)
    {
        case LISTCategories:{
            return{
                ...state,
                List:action.payload,
                load_Error:false,
                loading:false,
            }
        }
        case LISTFAIED:{
            return{
                ...state,
                load_Error:true,
                loading:false,
                List:'',
            }
            
        }
        default:
            return{
                ...state
            }
    }
}

export default CategoryReducer
