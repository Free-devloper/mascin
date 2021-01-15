import React from 'react';
export const _emailvalidator=(email)=>{
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
     if(re.test(email)){
         return true;
     }else{
         return false
     }
}

export const _passwordValidator=(pwd)=>{
    const regx1 = /^([a-zA-Z0-9@*#]{8,15})$/
    if(!regx1.test(pwd)){
       return false
    }else{
        return true
    }
}
export const _Empty=(val)=>{
    if(val=='')
    {
        return false;
    }else{
        return true;
    }
}