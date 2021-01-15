import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
function Cart() {
    return (
        <>
    <View style={style.mainContainer}>
      <Text>Categories</Text>
    </View>
        </>
    )
}

export default Cart

const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        flexBasis:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})