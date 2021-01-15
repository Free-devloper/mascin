import React from 'react'
import {ISAUTH,
    ISNOTAUTH,
    SIGNIN_FAIL,
    SIGNIN_STARTED,
    SIGNIN_SUCCESS,
    RESETAUTHSTATE,
    SIGNUP_FAIL,
    SIGNUP_START, 
    SIGNUP_SUCCESS} from '../../types';
const intialState={
    loading:false,
    Auth:'',
    Auth_status:false,
    error:{
        error_msg:'',
        error_flg:false
    }
}
const  Authreducer=(state=intialState,action)=>{
        switch(action.type){
            case ISAUTH:
                return{
                    ...state,
                    auth:true
                }
            case ISNOTAUTH:{
                return{
                    ...state,
                    auth:false
                }
            }
            case SIGNUP_START:{
                return{
                    ...state,
                    loading:true
                }
            }
            case SIGNUP_SUCCESS:{
                return{
                    ...state,
                    loading:false,
                    Auth:action.payload,
                    error:{
                        error_msg:'',
                        error_flg:false
                    }
                }
            }
            case SIGNUP_FAIL:{
                return{
                    ...state,
                    loading:false,
                    Auth:'',
                    error:{
                        error_msg:action.payload,
                        error_flg:true,
                    }
                }
            }
            case SIGNIN_STARTED:{
                return{
                    ...state,
                    loading:true,
                    Auth:'STARTED',
                    error:{
                        error_msg:'',
                        error_flg:false
                    }
                }
            }
            case SIGNIN_SUCCESS:{
                return{
                    ...state,
                    loading:false,
                    Auth:action.payload,
                    Auth_status:true,
                    error:{
                        error_msg:'',
                        error_flg:false
                    }
                }
            }
            case SIGNIN_FAIL:{
                return{
                    ...state,
                    loading:false,
                    Auth:'',
                    Auth_status:false,
                    error:{
                        error_msg:action.payload.msg,
                        error_flg:true
                    }
                }
            }
            case RESETAUTHSTATE:{
                return{
                    ...state,
                    ...intialState,
                }

            }
            default:
                return state;
        }
}

export default Authreducer
