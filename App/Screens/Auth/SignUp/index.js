import React, { useState } from 'react'
import { KeyboardAvoidingView,Platform, } from 'react-native';
import {} from 'react-native';
import { StyleSheet, View ,Text } from 'react-native';
import MButton from '../../../Components/UI/Button';
import MImage from '../../../Components/UI/Image';
import { Ionicons } from '@expo/vector-icons';
import { MText } from '../../../Components/UI/Text';
import MTextInput from '../../../Components/UI/TextInput';
import { Button, Header } from 'react-native-elements';
import { _emailvalidator, _Empty, _passwordValidator } from '../../../misc/Validations';
import { connect } from 'react-redux';
import {resetAuthState, SIGNUP}  from '../../../appStore/actions/Auth_action';
import { SafeAreaView } from 'react-native';
import { theme } from '../../../Components/Theme';
const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
function SignUp(props) {

const [Username,setUsername]=useState({value:'',error:''})
const [email,setemail]=useState({value:'',error:''})
const [password,setpassword]=useState({value:'',error:''})
const [cpassword,setcpassword]=useState({value:'',error:''})
const _onChange=(val,type)=>{
    switch(type){
        case 'USERNAME':
            setUsername({value:val,error:''})
            break;
        case 'EMAIL':
            setemail({value:val,error:''})
            break;
        case 'PASSWORD':
            setpassword({value:val,error:''})
            break;
        case 'CPASSWORD':
            setcpassword({value:val,error:''})
            break;
            default:
                return false;
    }
}
const _onSignup=()=>{
    if(_Empty(Username.value)=='')
    {
        setUsername({error:'Field is required'})
    }else if(!_Empty(email.value)||!_emailvalidator(email.value)){
        setemail({error:'Invalid Email'})
    }else if(!_passwordValidator(password.value))
    {
        setpassword({error:'Password must consists of at least 1 alphanumeric characters and 8-15 length.'})
    }else if(password.value!==cpassword.value){
        setcpassword({error:'Passwords not matched'})
    }else{
        let data={username:Username.value,email:email.value,password:password.value }
        props.SIGNUP(data);
    }

}
    return (
     <>
<Header
backgroundColor={'white'}
placement="center"
barStyle={'dark-content'}
leftComponent={<Button onPress={()=>{props.RESETAUTH();props.navigation.goBack()}} buttonStyle={{backgroundColor:'white'}} icon={<Ionicons size={24} name={Platform.OS=='ios'?'ios-arrow-back':'md-arrow-back'}/>}/>}
centerComponent={<MImage resizeMode={'contain'} source={require('../../../src/assets/Images/Base/LOGO.png')} width={'100%'} /> }
/>
   <SafeAreaView>
     <KeyboardAvoidingView  style={style.maincontainer} contentContainerStyle={style.maincontainer} keyboardVerticalOffset={keyboardVerticalOffset} behavior={Platform.OS == "ios" ? "padding" : "height"} >
     <MText childern={'SignUp'} style={{fontSize:20}}/>
     <View> 
         <MTextInput disabled={props.Auth.loading} placeholder={'Username'} value={Username.value} onChangeText={(val)=>_onChange(val,'USERNAME')} errorMessage={Username.error} />
         <MTextInput disabled={props.Auth.loading} placeholder={'Email'} value={email.value} onChangeText={(val)=>_onChange(val,'EMAIL')} errorMessage={email.error} />
         <MTextInput disabled={props.Auth.loading} placeholder={'Password'} secureTextEntry={true} value={password.value}  onChangeText={(val)=>_onChange(val,'PASSWORD')} errorMessage={password.error} />
         <MTextInput disabled={props.Auth.loading} placeholder={'ConfirmPassword'} secureTextEntry={true} value={cpassword.value}  onChangeText={(val)=>_onChange(val,'CPASSWORD')} errorMessage={cpassword.error} />
         
     </View>
     <View>{props.Auth.error.error_flg&&<Text style={style.e_txt}>{props.Auth.error.error_msg}</Text>||props.Auth.Auth=='Registration Successful'&&<Text style={style.s_txt}>{props.Auth.Auth} Check Your Mailbox to Activate Account</Text>}</View>
     <View><MButton loading={props.Auth.loading} onPress={_onSignup} title='SignUp'/></View>
     <View></View>
     <View></View>
     </KeyboardAvoidingView>
     </SafeAreaView>
     </>
    )
}

const style= StyleSheet.create({
    maincontainer:{
        flex:1,
        flexBasis:'100%',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%',
        height:'100%',
        padding:0,
        backgroundColor:'#fff'
    },
    s_txt:{
        ...theme.text.captionOne,
        color:theme.colors.primary,
        textAlign:'center',
        letterSpacing:1,
        lineHeight:20
    },e_txt:{
        ...theme.text.captionOne,
        color:theme.colors.semantic.red,
        color:theme.colors.semantic.red,
        textAlign:'center',
        letterSpacing:1,
    }
})
const mapDipatchToprops=(dispatch)=>({
    SIGNUP:(data)=>dispatch(SIGNUP(data)),
    RESETAUTH:()=>dispatch(resetAuthState())
})
const mapStateToProps=(state)=>{
    return({
      Auth:state.Auth,
    })
  }
export default connect(mapStateToProps,mapDipatchToprops)(SignUp);