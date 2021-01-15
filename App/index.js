import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import NavigationContainer from './routes/index.js';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black, } from '@expo-google-fonts/montserrat';
import { connect } from 'react-redux';
import {AutoSignIn, CHECK_TOKEN, ISAuthaction, ISNOTAUTHaction } from './appStore/actions/Auth_action.js';
import { ThemeProvider } from '@react-navigation/native';
import { theme } from './Components/Theme/index.js';
import { GET_TOKEN } from './misc/misc.js';
function App(props) {
  /*Fonts lODING */
  const [isAuth,setisAuth]=useState(false);
  let [fontsLoaded] = useFonts({
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold, 
  Montserrat_900Black,
  });
  /*Check Auth */
  // const Checkauth=async()=>{
  //   let auth =await CHECK_TOKEN();
  //   if(auth){
  //     props.ISAUTH();
  //   }
  // }
useEffect(()=>{
  async function Check_auth(){
    let res=await GET_TOKEN();
    if(res)
    {
      props.AutoSIGNIN(JSON.parse(res));
    }else{
    }
  }
  Check_auth();
},[])
/*Main Function*/
  if (!fontsLoaded) {
    return <><AppLoading  />  
    <StatusBar style="auto" /></>;
  }else{
  return (
     <>
     <NavigationContainer isAuth={props.Auth.Auth_status} {...props}/>
     <StatusBar style="auto"/>
      </>
  );
  }
}
const mapStateToProps=(state)=>{
  return({
    Auth:state.Auth,
    Products:state.Products
  })
}
const mapDipatchToprops=(dispatch)=>({
  AutoSIGNIN:(data)=>dispatch(AutoSignIn(data)),
})
export default connect(mapStateToProps,mapDipatchToprops)(App);
const styles = StyleSheet.create({

});
