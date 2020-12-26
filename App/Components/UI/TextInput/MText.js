import React from 'react'
import { StyleSheet,Dimensions } from 'react-native';
import {Input} from 'react-native-elements';
import {theme} from '../../Theme/index'
const SCREENWIDTH=Dimensions.get('window').width;
export default function MTextInput(props) {
    return (
        <>      
      <Input {...props} errorStyle={style.error} style={style.input} containerStyle={style.containerStyle} />
        </>

    )
}

const style=StyleSheet.create({
    input:{
        width:SCREENWIDTH-20,
        height:44,
        ...theme.text.bodytwo
    },containerStyle:{
        width:SCREENWIDTH-20,
        height:76,
        marginTop:5
    },error:{
        ...theme.text.captionOne,
        fontStyle:'italic'
    }
})
