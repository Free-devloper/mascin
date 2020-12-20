import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator,} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
/*Screen Imports */
import Home from './../Screens/Home';
import Login from './../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
/*Screen Imports */
const StackNavigation=createStackNavigator();
const BottomTabNavigation= createBottomTabNavigator();



/* Home Stack Options! */
const AppStack=(props)=>{
    return(
        <>
        <StackNavigation.Navigator headerMode={'none'}>
            <StackNavigation.Screen name={"Home"} component={Home}/>
            <StackNavigation.Screen name={"Login"} component={Login} />
        </StackNavigation.Navigator>
        </>
    )
}

/* Auth Stack */
const AuthStack=()=>{
    return(
        <>
        <StackNavigation.Navigator>
            <StackNavigation.Screen name={"SignUp"} component={SignUp} />
        </StackNavigation.Navigator>
        </>
    )
}

/*Navigation Container Export */
function NavgationContainer(props) {
    return (
        <>
        <NavigationContainer>
            <AppStack {...props}/>
        </NavigationContainer>
        </>
    )
}
export default NavgationContainer

