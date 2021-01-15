import React from 'react'
import {Text,View,StyleSheet, } from 'react-native'
import { connect } from 'react-redux'
import {Logout } from '../../../appStore/actions/Auth_action';
import MButton from '../../../Components/UI/Button';
function Account(props) {
    return (
      <>
      <View style={style.mainContainer}>
      <Text>Account</Text>
      <MButton title='Logout' onPress={()=>props.Logout()} />
      </View>
      </>
    )
}
const  mapDipatchTopros=(dispatch)=>({
    Logout:()=>dispatch(Logout()),
})
export default connect(null,mapDipatchTopros)(Account);
const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        flexBasis:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})