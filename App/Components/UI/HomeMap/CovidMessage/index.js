import React, { Component } from 'react'
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native'
import { theme } from '../../../Theme';

function CovidMessage (){
        return (
            <View style={styles.container}>
                <Text style={styles.tittle}> Travel if necessary </Text>
                <Text style={styles.text}>problem with reading and refactoring.What about reuse, </Text>
                <Text style={styles.learnMore}> Learn More</Text>
            </View>
        )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:theme.colors.semantic.blue,
        padding:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    tittle:{
        ...theme.text.title,
        color:theme.colors.neutral.white,
        marginBottom:10
    },
    text:{
        ...theme.text.bodythree,
        color:theme.colors.neutral.semiwhite,
        marginBottom:10
    },
    learnMore:{
        ...theme.text.bodytwo,
        color:theme.colors.neutral.white
    }
})
export default CovidMessage;