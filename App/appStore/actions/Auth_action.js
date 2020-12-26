import React from 'react'
import {ISAUTH,ISNOTAUTH} from '../types'
export const  ISAuthaction=()=>{
    return (
        {
            type:ISAUTH,
            payload:true
        }
    )
}
export const ISNOTAUTHaction=()=>{
    return{
        type:ISAUTH,
        payload:false
    }
}