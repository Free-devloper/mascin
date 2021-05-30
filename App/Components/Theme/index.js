import { DefaultTheme } from '@react-navigation/native';
import { Platform } from 'react-native';
export const theme={
    ...DefaultTheme,
    fonts:{
        light:'Montserrat_300Light',
        regular:'Montserrat_400Regular',
        medium:'Montserrat_500Medium',
        semibold:'Montserrat_600SemiBold',
        bold:'Montserrat_700Bold',
        black:'Montserrat_900Black'

    },
    colors:{
        primary:'#50E3C2',
        accent:'#272459',
        neutral:{
            dark:'#75759E',
            semidark:'#C8C8D3',
            semiwhite:'#F0F1F5',
            white:'#FFFFFF'
        },
        semantic:{
            yellow:'#F7D96F',
            lightpurple:'#BBAFFE',
            lightPink:'#F6BDAC',
            red:'#F35C56',
            lightred:'#F5B888',
            blue: Platform.OS=='ios'? '#147EFB' : '#00a2ed',
            grey: Platform.OS=='ios'? "rgb(99, 99, 102)" : "rgb(72, 72, 74)",
            light_grey: Platform.OS=='ios'? "rgb(174, 174, 178)" : "rgb(174, 174, 178)",
        }
    },
    text:{
        title:{
            fontFamily:'Montserrat_600SemiBold',
            fontSize:20,
        },
        bodyone:{
            fontFamily:'Montserrat_600SemiBold',
            fontSize:16,
        },
        bodytwo:{
            fontFamily:'Montserrat_500Medium',
            fontSize:16,
        },bodythree:{
            fontFamily:'Montserrat_600SemiBold',
            fontSize:14,   
        },captionOne:{
            fontFamily:'Montserrat_600SemiBold',
            fontSize:12,  
        },captionTwo:{
            fontFamily:'Montserrat_500Medium',
            fontSize:12,
        }
    }
}