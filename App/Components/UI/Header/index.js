import React, { useRef, useState } from 'react'
import {Header,SearchBar} from 'react-native-elements';
import {StyleSheet,View,Keyboard} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { Platform } from 'react-native';
import { theme } from '../../Theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MActivityIndicator from '../ActivityIndicator';
function HomeHeader(props) {
    return (
        <Header 
        {...props}
        placement='left'
        rightComponent={notificationarea}
        centerComponent={searchbar}
        backgroundColor={'white'}
        barStyle='dark-content'
        statusBarProps={{barStyle:'dark-content',backgroundColor:'white'}}
        />
    )
}
const notificationarea=()=>{
    return(
        <View style={{flex:1,alignItems:'center',flexDirection:'row',justifyContent:'space-between'}}>
     <TouchableOpacity>
     <Ionicons name={Platform.OS=='ios'? 'ios-qr-code-outline' : 'md-qr-code-outline'} size={24} color='black' />
         </TouchableOpacity> 
         <TouchableOpacity>
         <Ionicons style={{marginHorizontal:15}} name={Platform.OS=='ios'? 'ios-notifications' : 'md-notifications-sharp'} size={24} color='black' />
         </TouchableOpacity>
        </View>
    )
}
const searchbar=()=>{
    const [searchval,setSearchval]=useState();
    const searchref=useRef(null)
    const updateSearch=(val)=>{setSearchval(val)}
    const [backgroundColor,setbackgroundcolor]=useState(theme.colors.neutral.semiwhite);
    const changecolor=(color)=>{
        setbackgroundcolor(color)
    }
    return(
        <SearchBar
        containerStyle={style.searchbarcontainer}
        inputContainerStyle={[style.searchbarinputcontainer,{backgroundColor:backgroundColor}]}
        inputStyle={style.searchbarinput}
        placeholder="Search."
        ref={(ref)=>searchref.current=ref}
        loadingProps={<MActivityIndicator size={23}/>}
        onEndEditing={()=>{changecolor(theme.colors.neutral.semiwhite)}}
        leftIcon={()=><Ionicons name={Platform.OS=='ios'?'ios-search':'md-search'} size={24} color='black' />}
        lightTheme={true}
        autoFocus={false} 
        onCancel={()=>changecolor(theme.colors.neutral.semiwhite)}
        onFocus={()=>changecolor(theme.colors.neutral.white)}  
        onChangeText={(val)=>updateSearch(val)}
        value={searchval}
        />
    )

}
export default HomeHeader;
const style=StyleSheet.create({
    searchbarcontainer:{
        width:'100%',
        height:'auto',
        backgroundColor:'white',
        borderBottomWidth:0,
        borderTopWidth:0,
    },
    searchbarinputcontainer:{
        width:'100%',
        borderBottomWidth:1,
        borderWidth:1,
        borderRadius:15,
        borderColor:'#fff',
        borderTopRightRadius:0,
        padding:0
    },
    searchbarinput:{
        ...theme.text.bodytwo,
        color:'#000',
        zIndex:99999,
        padding:10,
    }
})