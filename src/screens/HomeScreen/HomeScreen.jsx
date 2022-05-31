import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {BigButton1, BigButton2, BigButton3, Container, Img, ImgLit, MainText, Wrapper} from './style'
import { useFonts } from 'expo-font';

import MainBG from './../../images/mainbg.png'
import Img1 from './../../images/1.png'
import Img2 from './../../images/2.png'
import Img3 from './../../images/3.png'

const HomeScreen = ({ navigation }) => {
  const [loaded] = useFonts({
    Gilroy: require('./../../fonts/Gilroy.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Container source={MainBG} resizeMode='repeat'>
      <Wrapper>
        <MainText style={{ fontFamily: 'Gilroy' }}>
          Assalomu alaykum, iltimos bizning kanallaridan birini tanlang
        </MainText>
        <BigButton1
        onPress={() => navigation.navigate('biztv')}
         style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#c70e48'
              : '#E2336B'
          },
        ]}
        >
           <Img source={Img1} />
        </BigButton1>
        <BigButton2
        onPress={() => navigation.navigate('bizcinema')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#040e30'
              : 'rgba(18, 36, 94, 1)'
          },
        ]}
        >
           <ImgLit source={Img2} />
        </BigButton2>
        <BigButton3
        onPress={() => navigation.navigate('bizmusic')}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? '#84ff00'
              : 'rgba(109, 212, 0, 1)'
          },
        ]}
        >
          <ImgLit source={Img3} />
        </BigButton3>
      </Wrapper>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});
export default HomeScreen