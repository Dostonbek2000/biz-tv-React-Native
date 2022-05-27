import * as React from 'react';
import { Text, View,ImageBackground,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,MaterialIcons,Ionicons,MaterialCommunityIcons } from 'react-native-vector-icons'
import MainBG from './src/images/mainbg.png'
import { Dimensions } from 'react-native';
const { Height,Width } = Dimensions.get('window');


function HomeScreen() {
  return (
    <ImageBackground source={MainBG} style={styles.image}>
      <Text >Elements</Text>
      <Text >in Front of</Text>
      <Text >Background</Text>
    </ImageBackground>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Yangiliklar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Yangiliklar!</Text>
    </View>
  );
}

function Korsatuvlar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Korsatuvlar!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator()



export default function App() {
  return (
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
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarActiveBackgroundColor:'none'
        })}
      >
        <Tab.Screen headerShown={false} name="biz tv" component={HomeScreen} />
        <Tab.Screen headerShown={false} name="yangiliklar" component={Yangiliklar} />
        <Tab.Screen headerShown={false} name="ko'rsatuvlar" component={Korsatuvlar} />
        <Tab.Screen headerShown={false} name="boshqa" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    resizeMode: 'repeat',
    height: '100%',
    width: Width
    
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});