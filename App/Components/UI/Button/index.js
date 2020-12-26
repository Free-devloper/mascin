import React from 'react'
import { StyleSheet,Dimensions } from 'react-native';
import {Button} from 'react-native-elements';
import {theme} from '../../Theme/index'
const SCREENWIDTH=Dimensions.get('window').width;
function MButton(props) {
    return (
        <>  
        <Button {...props} buttonStyle={[props.style,style.btn]} /> 
        </>
    )
}

export default MButton;
const style=StyleSheet.create({
    btn:{
        width:SCREENWIDTH-20,
        height:44,
        borderRadius:20,
        backgroundColor:theme.colors.primary,
        color:theme.colors.neutral.white
    }
})


