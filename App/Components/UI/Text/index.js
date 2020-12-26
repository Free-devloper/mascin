import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { theme } from '../../Theme';

export function MText(props) {
    return (
        <Text style={[style.text,props.style]}>{props.childern}</Text>
        
    )
}
const style=StyleSheet.create({
    text:{
        ...theme.text.bodytwo,
        color:'#000'
    }
})
