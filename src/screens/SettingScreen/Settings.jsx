import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container, LinkButton, LinksContainer, } from './style'
import {FontAwesome} from 'react-native-vector-icons';

import MainBG from './../../images/bextbg.png'

const Settings = () => {
  return (
    <Container source={MainBG} resizeMode='cover'>
      <LinksContainer>
         <LinkButton>
           
         </LinkButton>
         
      </LinksContainer>
    </Container>
  )
}

export default Settings

const styles = StyleSheet.create({})