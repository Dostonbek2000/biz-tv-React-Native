import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BizMusic = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.word}>BizMusic</Text>
    </View>
  )
}

export default BizMusic

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