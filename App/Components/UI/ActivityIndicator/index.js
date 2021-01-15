import React from 'react'
import { ActivityIndicator,View } from 'react-native'
import {} from 'react-native-elements'
import { theme } from '../../Theme'
function MActivityIndicator(props) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator {...props} animating={true} color={theme.colors.primary}/>
        </View>
    )
}

export default MActivityIndicator
