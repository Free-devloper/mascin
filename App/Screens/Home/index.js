import React,{useState} from 'react'
import MButton from './../../Components/UI/Button'
import { StyleSheet,View,Animated } from 'react-native';
function Home(props) {
    const [position,setPositon]=useState(new Animated.ValueXY());
    Animated.timing(position,{toValue:position,duration:1000,useNativeDriver:false}).start();
    return (
     <>
     <View style={style.maincontainer}>
       <Animated.View style={position.getLayout()}>
         <MButton title={'My Button'} onPress={()=>console.log('URR')} />
         </Animated.View>
     </View>
     </>
    )
}

export default Home;
const style=StyleSheet.create({
    maincontainer:{
        flex:1,
        padding:30,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'green'
    }
})
