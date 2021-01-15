import AsyncStorage from '@react-native-community/async-storage'
import React from 'react';
export const SET_TOKEN=async(data)=>{
    try{
    await AsyncStorage.setItem('@macsin_Auth_User',JSON.stringify(data));
    console.log('SUCCESS'); 
    return true;
    }catch(e){
        console.log(e);
        return false
    }
}
export const GET_TOKEN=async()=>{
    try{
        let Auth=await AsyncStorage.getItem('@macsin_Auth_User');
        console.log(Auth);
        return Auth;
    }catch(e)
    {
        console.log(e);
        return false;
    }
}
export const DELETE_TOKEN=async()=>{
    try{
        await AsyncStorage.clear();
        return true;
    }catch(e)
    {
        console.log(e);
        return false;
    }
}