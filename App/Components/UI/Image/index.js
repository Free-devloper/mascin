import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
export default function MImage(props) {
    return (
        <Image {...props} style={[props.style,style.img]} resizeMode="contain" />
    )
};
const style= StyleSheet.create({
    img:{
        width:'100%'
    }
})