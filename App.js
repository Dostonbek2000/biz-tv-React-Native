import * as React from 'react';
import { Text, View,ImageBackground,StyleSheet,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,MaterialIcons,Ionicons,MaterialCommunityIcons } from 'react-native-vector-icons'


//screens
import Yangiliklar from './src/screens/Yangiliklar/Yangiliklar';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import Korsatuvlar from './src/screens/Korsatuvlar/Korsatuvlar';
import SettingsScreen from './src/screens/SettingScreen/Settings';


// //components
import BizTV from './src/components/BizTv/BizTv'
import BizMusic from './src/components/BizMusic/BizMusic';
import BizCinema from './src/components/BizCinema/BizCinema';
import DetailComponent from './src/components/DetailComponent/DetailComponent';


const Tab = createBottomTabNavigator()



export default function App() {
  return (
    <>
    <NavigationContainer >
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            if (route.name === 'biz tv') {
              return  focused ?  
              <MaterialIcons name={'live-tv'} size={size} color={'black'} /> : 
              <MaterialIcons name={'live-tv'} size={size} color={color} />
            } else if (route.name === 'yangiliklar') {
              return focused ?
              <Ionicons name={'newspaper-outline'} size={size} color={'black'} /> : 
              <Ionicons name={'newspaper-outline'} size={size} color={color} />
            } else if (route.name === "ko'rsatuvlar") {
              return focused ?
              <MaterialCommunityIcons name={'video-wireless-outline'} size={size} color={'black'} /> : 
              <MaterialCommunityIcons name={'video-wireless-outline'} size={size} color={color} />
            } else if (route.name === 'boshqa') {
              return focused ?
              <Entypo name={'dots-three-horizontal'} size={size} color={'black'} /> : 
              <Entypo name={'dots-three-horizontal'} size={size} color={color} />
            }
          },
          tabBarButton: [
            "bizmusic",
            "bizcinema",
            "biztv",
            "detail"
          ].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
          
            headerShown:false,
            tabBarStyle: {
            borderTopLeftRadius: 19,
            borderTopRightRadius: 19,
            backgroundColor: 'aqua',
            shadowOffset: {
                width: 15,
                height: 111,
            },
            shadowOpacity: 0.78,
            shadowRadius: 22.0,
            elevation: 24,
            borderTopLeftRadius: 21,
            borderTopRightRadius: 21,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: 64,
            paddingBottom: 5
        },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor:'none'
        })}
        
        >
        <Tab.Screen headerShown={false} name="biz tv" component={HomeScreen} />
        <Tab.Screen headerShown={false} name="yangiliklar" component={Yangiliklar} />
        <Tab.Screen headerShown={false} name="ko'rsatuvlar" component={Korsatuvlar} />
        <Tab.Screen headerShown={false} name="boshqa" component={SettingsScreen} />
        <Tab.Screen headerShown={false} name="biztv" component={BizTV} />
        <Tab.Screen headerShown={false} name="bizcinema" component={BizCinema} />
        <Tab.Screen headerShown={false} name="detail" component={DetailComponent} />
        <Tab.Screen headerShown={false} name="bizmusic" component={BizMusic} />
      </Tab.Navigator>

    </NavigationContainer>
    </>
    
  );
}