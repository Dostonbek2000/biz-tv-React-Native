import { StyleSheet, Text, View,Switch } from 'react-native'
import React, { useState } from 'react'
import { Container, CuteCategory, CuteCategory1, CuteView, ImageIcon, LinkButton, LinksContainer, TouchText, } from './style'
import {FontAwesome,MaterialCommunityIcons} from 'react-native-vector-icons';

import MainBG from './../../images/bextbg.png'
import BIcon1 from './../../images/bicon.png'
import BIcon2 from './../../images/loud.png'
import BIcon3 from './../../images/placeholder.png'

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <Container source={MainBG} resizeMode='cover'>
      <LinksContainer>
         <LinkButton>
           <Text>
              <FontAwesome name='facebook' color='#2168EF' size={18}  />
           </Text>
         </LinkButton>
         <LinkButton>
           <Text>
              <FontAwesome name='google-plus' color='#FF3B50' size={18}  />
           </Text>
         </LinkButton>
         <LinkButton>
           <Text>
              <FontAwesome name='twitter' color='#1AB4F9' size={18}  />
           </Text>
         </LinkButton>
         <LinkButton>
           <Text>
              <FontAwesome name='instagram' color='#FF3C8C' size={18}  />
           </Text>
         </LinkButton>
         <LinkButton>
           <Text>
              <MaterialCommunityIcons name='signal-variant' color='#FF8519' size={18}  />
           </Text>
         </LinkButton>
         
      </LinksContainer>
      <View style={styles.view}>
        <CuteCategory activeOpacity={0.8} style={styles.shadow}>
          <ImageIcon  source={BIcon1} /><TouchText>Teledasturlar</TouchText>
        </CuteCategory>
        <CuteCategory activeOpacity={0.8} style={styles.shadow}>
          <ImageIcon source={BIcon2} /><TouchText>Reklama</TouchText>
        </CuteCategory>
        <CuteCategory activeOpacity={0.8} style={styles.shadow}>
          <ImageIcon source={BIcon3} /><TouchText>Biz bilan aloqa</TouchText>
        </CuteCategory>
      </View>
      <CuteView style={{borderRadius:10}}>
        <CuteCategory1 activeOpacity={0.4} >
          <TouchText>Loyiha haqida</TouchText>
        </CuteCategory1>
        <CuteCategory1 activeOpacity={0.4} >
          <TouchText>Foydalanish shartlari</TouchText>
        </CuteCategory1>
        <CuteCategory1 onPress={toggleSwitch} activeOpacity={0.4} >
          <TouchText>Уведомления</TouchText>
          <Switch
            trackColor={{ false: "#767577", true: "#6c6c6c" }}
            thumbColor={isEnabled ? "#96b015" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </CuteCategory1>
      </CuteView>
    </Container>
  )
}

export default Settings

const styles = StyleSheet.create({
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
    marginTop:12
  },
  view:{
    marginTop:20,
    width: '100%',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center'
  }
})