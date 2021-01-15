import React from 'react';
import { StyleSheet,Text } from 'react-native';
import { theme } from '../../Theme';

export function MText({styles,childern}) {
    return (
        <Text style={[style.text,styles]}>{childern}</Text>
        
    )
}
const style=StyleSheet.create({
    text:{
        ...theme.text.bodytwo,
        color:'#000'
    }
})
