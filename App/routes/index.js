import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton,} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Ionicons';
/*Screen Imports */
import Home from './../Screens/Home';
import Login from './../Screens/Auth/Login';
import SignUp from '../Screens/Auth/SignUp';
import { theme } from '../Components/Theme';
import HomeHeader from '../Components/UI/Header';
import Categories from '../Screens/Home/Categories';
import Cart from '../Screens/Home/Cart';
import Account from '../Screens/Home/Account';
import { Platform } from 'react-native';
/*Screen Imports */
const StackNavigation=createStackNavigator();
const BottomTabNavigation= createBottomTabNavigator();



/* Home Stack Options! */
const HomeStack=(props)=>{
    return(
        <>
        <StackNavigation.Navigator screenOptions={{header:HomeHeader}} initialRouteName={'Home'}>
            <StackNavigation.Screen name={"HomeScreen"} component={Home}/>
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
/* Bottom Tab Navigator */
const Apptab=()=>{
    return(
        <BottomTabNavigation.Navigator tabBarOptions={{style:{backgroundColor:'#fff',},tabStyle:{flex:1,justifyContent:'center',alignItems:'center',alignContent:'center'},activeTintColor:theme.colors.primary,}}> 
            <BottomTabNavigation.Screen options={{tabBarLabel:'Home',tabBarIcon:({ color,size })=>(<Icon name={Platform.OS=='ios'?'ios-home':'md-home'} size={size} color={color}  />),}}   name='Home' component={HomeStack}/>
            <BottomTabNavigation.Screen options={{tabBarLabel:'Categories',tabBarIcon:({ color,size })=>(<Icon name={Platform.OS=='ios'?'ios-menu':'md-menu'} size={size} color={color} />)}} name='Categories' component={Categories} />
            <BottomTabNavigation.Screen options={{tabBarLabel:'Cart',tabBarIcon:({ color,size })=>(<Icon name={Platform.OS=='ios'?'ios-cart':'md-cart'} size={size} color={color}  />)}} name='Cart' component={Cart}/>
            <BottomTabNavigation.Screen options={{tabBarLabel:'Account',tabBarIcon:({ color,size })=>(<Icon name={Platform.OS=='ios'?'ios-person':'md-person'} size={size} color={color}  />)}} name='Account' component={Account}/>
        </BottomTabNavigation.Navigator>
    )
}
/* AppStack Navigation */
const AppStack=()=>{
    return(
        <StackNavigation.Navigator headerMode="none" >
            <StackNavigation.Screen name='AppTab' component={Apptab} /> 
        </StackNavigation.Navigator>
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

