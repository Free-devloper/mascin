import * as React  from 'react';
import {statusBar} from 'expo-status-bar';
import {StyleSheet,View} from 'react-native';
import {Text} from 'react-native-elements';
import HomeMap from '../../Components/UI/HomeMap';
import CovidMessage from '../../Components/UI/HomeMap/CovidMessage';
import HomeSearch from '../../Components/UI/HomeMap/HomeSearch';
 function Home(props){
    return(
         
         <>
         <HomeMap {...props}/>
         <CovidMessage {...props}/>
         <HomeSearch {...props}/>
         </>
     )
 }
 const styles=StyleSheet.create({
     maincontainer:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
     }
 })
 export default Home;