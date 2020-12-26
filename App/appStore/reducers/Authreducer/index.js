import React from 'react'
import {ISAUTH,ISNOTAUTH} from '../../types';
const intialState={
    auth:false
}
function Authreducer(state=intialState,action) {
        switch(action.type){
            case ISAUTH:
                return{
                    ...state,
                    auth:action.payload
                }
                break;
            case ISNOTAUTH:{
                return{
                    ...state,
                    auth:action.payload
                }
                break;
            }
            default:
                return state;
        }
}

export default Authreducer
