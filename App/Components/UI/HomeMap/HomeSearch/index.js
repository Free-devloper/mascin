import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import Entypo from '@expo/vector-icons/Entypo'
import { theme } from '../../../Theme'
import { Button } from 'react-native'
function HomeSearch(props) {
    return (
            <>
           <View>
               <Button title="logout" onPress={()=>{props.navigation.navigate('Account')}}  />
               <View style={styles.searchBox}>
                   <Text style={styles.searchBoxtext}>Where To?</Text>
                   <View style={styles.searchBoxIcon}>
                       <Icon name='clockcircle' size={16} color={theme.colors.neutral.dark} />
                       <Text>Now</Text>
                       <Icon name='down' size={16} color={theme.colors.neutral.dark} />
                   </View>
               </View>
               <View style={styles.row}>
                   <View style={styles.rowIconContainer}>
                       <Icon name='clockcircle' size={20}  color={theme.colors.neutral.white}/>
                   </View>
                   <Text style={styles.address}>Spin Night Club</Text>
               </View>
               <View style={styles.row}>
                   <View style={[styles.rowIconContainer,{backgroundColor:theme.colors.semantic.blue}]}>
                       <Entypo name='home' size={20}  color={theme.colors.neutral.white}/>
                   </View>
                   <Text style={styles.address}>Home</Text>
               </View>
           </View>
            </>
    )
}

const styles=StyleSheet.create({
    searchBox:{
        backgroundColor:theme.colors.neutral.semiwhite,
        margin:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    searchBoxtext:{
        ...theme.text.bodyone,
        color:theme.colors.neutral.dark
    },
    searchBoxIcon:{
        flexDirection:'row',
        width:100,
        justifyContent:'space-between',
        backgroundColor:theme.colors.neutral.white,
        padding:10,
        borderRadius:50
    },
    row:{
        flexDirection:'row',
        padding:20,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:theme.colors.neutral.semiwhite
    },
    rowIconContainer:{
        backgroundColor:theme.colors.semantic.light_grey,
        padding:10,
        borderRadius:25
    },
    address:{
        ...theme.text.bodythree,
        marginLeft:10,
    }
})
export default HomeSearch
