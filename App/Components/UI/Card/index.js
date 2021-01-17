import React, { useState } from 'react'
import {Card,Image} from 'react-native-elements';
import Icon from '@expo/vector-icons/Ionicons';
import {View,StyleSheet,Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from '@react-navigation/native';
import { theme } from '../../Theme';
import { W_WIDTH } from '../NativeUI';
function MCard({item,index}) {
    const themes=useTheme();
    const [wished,setWished]=useState(false);
    return (
        <>
    <Card containerStyle={style.containerStyle} wrapperStyle={style.wrapperStyle}>
<TouchableWithoutFeedback onPress={()=>{console.log(item.name)}}>
  <Card.Image resizeMode={'contain'} source={{uri:item.gallery[0]}}>
  </Card.Image>
  </TouchableWithoutFeedback>
  <Card.Title numberOfLines={2} ellipsizeMode={'tail'} style={style.nameText}  >{item.name}</Card.Title>
  <Card.Divider/>
  <Text style={style.price_text}>
        {item.currency}. {item.buyout_price}
    </Text>
  <View style={style.LastContainer}>
  <Text style={style.AddressTxt} ellipsizeMode={'tail'} numberOfLines={1}>
   {item.state}
    </Text>
    <TouchableWithoutFeedback onPress={()=>{console.log(item.name+'To Wish List'+wished);setWished(!wished)}}>
    <Text style={style.Wish_icon}>
        <Icon name={wished==true? 'ios-heart' :"ios-heart-outline"} size={18} color={wished==true?themes.colors.primary:'black'} />
    </Text>
    </TouchableWithoutFeedback>
    </View>
</Card>
        </>
    )
}

export default MCard

const style=StyleSheet.create({
    containerStyle:{
        margin:0,
    },
    wrapperStyle:{
    },
    price_text:{
        textAlign:'left',
        ...theme.text.captionOne,
    },LastContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'nowrap',
        marginBottom:10,
    },AddressTxt:{
        marginTop:5,
        textAlign:'left',
        ...theme.text.captionOne,
        alignItems:'center',
        textAlignVertical:'center'
    },Wish_icon:{
        textAlign:'right',
        alignItems:'center',
        textAlignVertical:'center',
        ...theme.text.bodytwo,
        marginTop:5,
    },nameText:{
        ...theme.text.bodytwo,
    }


})