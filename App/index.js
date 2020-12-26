import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import NavigationContainer from './routes/index.js';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts,Montserrat_100Thin,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black, } from '@expo-google-fonts/montserrat';
import { connect } from 'react-redux';
function App(props) {
  const [isAuth,setisAuth]=useState(false);
  let [fontsLoaded] = useFonts({
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_900Black,
  });

  if (!fontsLoaded) {
    return <><AppLoading />  
    <StatusBar style="auto" /></>;
  }else{
  return (
     <>
     <NavigationContainer isAuth={isAuth} {...props}/>
     <StatusBar style="auto"/>
      </>
  );
  }
}
const mapStateToProps=(state)=>{
  return({
    Auth:state.Auth
  })
}
export default connect(mapStateToProps)(App);
const styles = StyleSheet.create({

});
