import React from 'react'
import { StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';

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
        padding:20,
    }
})


