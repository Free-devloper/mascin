import React,{useEffect, useState} from 'react'
import { StyleSheet,View,Animated,TouchableWithoutFeedback,Image,TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import MButton from '../../../Components/UI/Button';
import MImage from '../../../Components/UI/Image';
import { MText } from '../../../Components/UI/Text';
import MTextInput from '../../../Components/UI/TextInput';
import { OrderSvgComponent } from '../../../src/assets/Images/Svgimages';
import { Platform,StatusBar as Bar } from 'react-native';
import { connect } from 'react-redux';
import { _emailvalidator, _Empty, _passwordValidator } from '../../../misc/Validations';
import { SafeAreaView } from 'react-native';
import { resetAuthState, SIGNIN } from '../../../appStore/actions/Auth_action';
import { theme } from '../../../Components/Theme';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0
function Login(props) {
    const [email,setEmail]=useState({value:'',error:''});
    const [password,setPassword]=useState({value:'',error:''});
    const _onChange=(val,type)=>{
        switch(type) {
            case 'EMAIL':
                setEmail({value:val,error:''});
                break;
            case 'PASSWORD':
                setPassword({value:val,error:''});
                break;
            default:
                return false;
        }
    }
    const btn_show=()=>{
        if(_Empty(email.value)&&_Empty(password.value)&&_passwordValidator(password.value))
        {
            return true
        }else{
           return false
        }
    };
    const _onSignUpPressed=()=>{
        props.RESETAUTH();
        props.navigation.navigate('SignUp');
        
    };
    const _onSignInPressed=()=>{
        let data={username:email.value,password:password.value}
        props.SIGNIN(data);
    }
    return (
     <>
     <SafeAreaView style={{flex:1}}> 
     <KeyboardAvoidingView style={style.maincontainer} keyboardVerticalOffset={keyboardVerticalOffset} behavior={Platform.OS == "ios" ? "padding" : "height"}>  
        <OrderSvgComponent/>
        <MImage source={require('../../../src/assets/Images/Base/LOGO.png')} width={350} />
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <MTextInput
         placeholder={'Username/Email'}
          value={email.value}
          errorMessage={props.Auth.error.error_msg}
          errorStyle={style.input_error}
           onChangeText={(val)=>{_onChange(val,'EMAIL')}}/>
        <MTextInput placeholder={'Password'} secureTextEntry={true} value={password.value} onChangeText={(val)=>{_onChange(val,'PASSWORD')}}/>
        </View>
        {btn_show()&&<View><TouchableOpacity><MText childern={'Forgot Password?'}/></TouchableOpacity></View>}
        <View><TouchableOpacity onPress={_onSignUpPressed}><MText childern={'SignUp'}/></TouchableOpacity></View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        {btn_show()&&<MButton loading={props.Auth.loading} title={'Sign In'} onPress={()=>_onSignInPressed()} />}
        </View>
     </KeyboardAvoidingView>
     </SafeAreaView>
     </>
    )
}
const  mapDipatchToprops=(dispatch)=>({
    SIGNIN:(data)=>dispatch(SIGNIN(data)),
    RESETAUTH:()=>dispatch(resetAuthState())
})
const mapStateToprops=(state)=>{
    return{
        Auth:state.Auth
    }
}
export default connect(mapStateToprops,mapDipatchToprops)(Login);
const style=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#fff',
        height:'100%',
        flexBasis:'100%',
        alignItems:'center',
        padding:10,
        justifyContent:'space-around'
    },
    input_error:{
        ...theme.text.captionOne,
        color:theme.colors.semantic.red,
    }
})  
