import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton,} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/*Screen Imports */
import Home from './../Screens/Home';
import Login from './../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import { theme } from '../Components/Theme';
import { Button,Text } from 'react-native';
/*Screen Imports */
const StackNavigation=createStackNavigator();
const BottomTabNavigation= createBottomTabNavigator();



/* Home Stack Options! */
const AppStack=(props)=>{
    return(
        <>
        <StackNavigation.Navigator headerMode={'none'} initialRouteName={'Home'}>
            <StackNavigation.Screen name={"Home"} component={Home}/>
        </StackNavigation.Navigator>
        </>
    )
}

/* Auth Stack */
const AuthStack=()=>{
    return(
        <>
        <StackNavigation.Navigator initialRouteName={'Login'} headerMode={'none'}>
        <StackNavigation.Screen name={"Login"} component={Login} />
        <StackNavigation.Screen name={"SignUp"} component={SignUp}
        />
        </StackNavigation.Navigator>
        </>
    )
}

/*Navigation Container Export */
function NavgationContainer(props) {
    return (
        <>
        <NavigationContainer theme={theme}>
            {props.isAuth&&<AppStack {...props}/>}
            {!props.isAuth&&<AuthStack {...props}/>}
        </NavigationContainer>
        </>
    )
}
export default NavgationContainer

