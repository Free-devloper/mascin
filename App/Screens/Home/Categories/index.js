import React from 'react'
import { StyleSheet } from 'react-native';
import {Text,View} from 'react-native'
function Categories(props) {
    return (
      <>
      <View style={style.mainContainer}>
      <Text>Categories</Text>
      </View>
      </>
    )
}

export default Categories;
const style=StyleSheet.create({
    mainContainer:{
        flex:1,
        flexBasis:'100%',
        alignItems:'center',
        justifyContent:'center'
    }
})