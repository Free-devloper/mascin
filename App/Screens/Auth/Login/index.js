import React,{useState} from 'react'
import { StyleSheet,View,Animated,TouchableWithoutFeedback,Image,TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MButton from '../../../Components/UI/Button';
import MImage from '../../../Components/UI/Image';
import { MText } from '../../../Components/UI/Text';
import MTextInput from '../../../Components/UI/TextInput/MText';
import { OrderSvgComponent } from '../../../src/assets/Images/Svgimages';
import { Platform,StatusBar as Bar } from 'react-native';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
function Login(props) {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [btn,setBtn]=useState(false);
    const _onChange=(val,type)=>{
        switch(type) {
            case 'EMAIL':
                setEmail(val);
                break;
            case 'PASSWORD':
                setPassword(val);
                break;
            default:
                return false;
        }
    }
    const btn_show=()=>{
        if(email==='' || password==='')
        {
            return false;
        }else{
            return true;
        }
    };
    const _onSignUpPressed=()=>{
        props.navigation.navigate('SignUp');
        
    };
    return (
     <>
     <KeyboardAvoidingView style={style.maincontainer} keyboardVerticalOffset={keyboardVerticalOffset} behavior={Platform.OS == "ios" ? "padding" : "height"}>  
        <OrderSvgComponent/>
        <MImage source={require('../../../src/assets/Images/Base/LOGO.png')} width={350} />
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <MTextInput
         placeholder={'Username/Email'}
          value={email}
           onChangeText={(val)=>{_onChange(val,'EMAIL')}}/>
        <MTextInput placeholder={'Password'} secureTextEntry={true} value={password} onChangeText={(val)=>{_onChange(val,'PASSWORD')}}/>
        </View>
        {btn_show()&&<View><TouchableOpacity><MText childern={'Forgot Password?'}/></TouchableOpacity></View>}
        <View><TouchableOpacity onPress={_onSignUpPressed}><MText childern={'SignUp'}/></TouchableOpacity></View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        {btn_show()&&<MButton title={'Sign In'} onPress={()=>console.log(email)} />}
        </View>
     </KeyboardAvoidingView>
     </>
    )
}

export default Login;
const style=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#fff',
        height:'100%',
        flexBasis:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
})
