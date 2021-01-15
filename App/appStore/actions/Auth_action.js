import axios from 'axios';
import { DELETE_TOKEN, SET_TOKEN } from '../../misc/misc';
import { RequestSignInConfig } from '../AxiosConfigs/SIGNINCONFIG';
import { RequestSignUPConfig } from '../AxiosConfigs/SIGNUPCONFIG';
import {SIGNUP_START,SIGNUP_SUCCESS,SIGNUP_FAIL,SIGNIN_STARTED,SIGNIN_SUCCESS,SIGNIN_FAIL,RESETAUTHSTATE} from '../types';
export function SIGNUP_REQ(data) {
      return axios(RequestSignUPConfig(data))
}
export function SIGNUP(data){
    return function(dispatch){
        dispatch({
            type:SIGNUP_START,
        })
    return SIGNUP_REQ(data).then(
        result=>{
        if (result.data.msg==='Registration Successful')
        {
            dispatch({type:SIGNUP_SUCCESS,payload:result.data.msg})
        
        }else{
            dispatch({type:SIGNUP_FAIL,payload:result.data.msg});
        }
    },
        error=>{console.log(error +'error2');dispatch({type:SIGNUP_FAIL,payload:error.data})}
    ).catch(
        error=>{console.log(error+'error3');dispatch({type:SIGNUP_FAIL,payload:error})}
    )
    }
}

export function SIGNIN_REQ(data){
    return axios(RequestSignInConfig(data))
}
export function SIGNIN(data){
    return function(dispatch){
        dispatch({type:SIGNIN_STARTED,payload:null})
        return SIGNIN_REQ(data).then(
            res=>{
            if(res.data.msg==='Login Success'){
                SET_TOKEN(data).then(()=>{
                dispatch({type:SIGNIN_SUCCESS,payload:data})
            });
            }else{
                dispatch({type:SIGNIN_FAIL,payload:res.data})
            }
            },
            error=>dispatch({type:SIGNIN_FAIL,payload:error.data.message})
        ).catch(err=>{
            dispatch({type:SIGNIN_FAIL,payload:err.data})
        })
    }
}
export function resetAuthState(){
    return function (dispatch){
        dispatch({type:RESETAUTHSTATE,payload:null})
    }
}

export function AutoSignIn(data){
    return function (dispatch)
    {
        dispatch({type:SIGNIN_SUCCESS,payload:data})
    }
}
export function Logout(){
    return function(dispatch,getState){
        DELETE_TOKEN().then((res)=>{
            if(res){
                dispatch({type:RESETAUTHSTATE,payload:null})
            }else{
                dispatch({type:SIGNIN_SUCCESS,payload:getState.Auth})
            }
        })
    }
}