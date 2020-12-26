import React, { useState } from 'react'
import { KeyboardAvoidingView,Platform, } from 'react-native';
import {} from 'react-native';
import { StyleSheet, View , } from 'react-native';
import MButton from '../../../Components/UI/Button';
import MImage from '../../../Components/UI/Image';
import { Ionicons } from '@expo/vector-icons';
import { MText } from '../../../Components/UI/Text';
import MTextInput from '../../../Components/UI/TextInput/MText';
import { BackButton } from '../../../src/assets/Images/Svgimages';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button, Header } from 'react-native-elements';
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
const _passwordValidator=(pwd)=>{
    const regx1 = /^([a-zA-Z0-9@*#]{8,15})$/
    if(pwd.length<6|| !regx1.test(pwd)){
       return false
    }else{
        return true
    }
}
const _emailvalidator=(email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailValid = re.test(email);
    return emailValid;
}
const _onSignup=()=>{
    if(Username.value==''|| Username.value.length<4)
    {
        setUsername({error:'Field is required at least 4 charcters'})
    }else if(email.value==''||!_emailvalidator(email.value)){
        setemail({error:'Invalid Email'})
    }else if(!_passwordValidator(password.value))
    {
        setpassword({error:'Password must consists of at least 1 alphanumeric characters and 8-15 length.'})
    }else if(password.value!==cpassword.value){
        setcpassword({error:'Passwords not matched'})
    }else{

    }

}
    return (
     <>
<Header
backgroundColor={'white'}
placement="center"
barStyle={'dark-content'}
leftComponent={<Button onPress={props.navigation.goBack} buttonStyle={{backgroundColor:'white'}} icon={<Ionicons size={24} name={Platform.OS=='ios'?'ios-arrow-back':'md-arrow-back'}/>}/>}
centerComponent={<MImage resizeMode={'contain'} source={require('../../../src/assets/Images/Base/LOGO.png')} width={'100%'} /> }
/>
     <KeyboardAvoidingView  style={style.maincontainer} contentContainerStyle={style.maincontainer} keyboardVerticalOffset={keyboardVerticalOffset} behavior={Platform.OS == "ios" ? "padding" : "height"} >
     <MText childern={'SignUp'} style={{fontSize:20}}/>
     <View>
         <MTextInput placeholder={'Username'} value={Username.value} onChangeText={(val)=>_onChange(val,'USERNAME')} errorMessage={Username.error} />
         <MTextInput placeholder={'Email'} value={email.value} onChangeText={(val)=>_onChange(val,'EMAIL')} errorMessage={email.error} />
         <MTextInput placeholder={'Password'} secureTextEntry={true} value={password.value}  onChangeText={(val)=>_onChange(val,'PASSWORD')} errorMessage={password.error} />
         <MTextInput placeholder={'ConfirmPassword'} secureTextEntry={true} value={cpassword.value}  onChangeText={(val)=>_onChange(val,'CPASSWORD')} errorMessage={cpassword.error} />
         
     </View>
     <View><MButton onPress={_onSignup} title='SignUp'/></View>
     <View></View>
     </KeyboardAvoidingView>
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
        height:'100%'
    }
})
export default SignUp;
