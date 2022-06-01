import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BizCinema = () => {
  return (
    <View style={styles.container} >
    <Text style={styles.word}>BizCinema</Text>
  </View>
  )
}

export default BizCinema

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  word:{
    fontSize:20,
    color:'blue'
  }
})