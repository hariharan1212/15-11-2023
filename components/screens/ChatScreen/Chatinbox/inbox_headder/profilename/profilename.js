import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Profilename() {
  return (
    <>
    <View style={style.section}>
     <Text style={style.nametext}>RohitShetty</Text>
     <Text style={style.statustext}>Message status...</Text>
    </View>
    </>
  )
}

const style = StyleSheet.create({
     nametext:{
      fontSize:25,
      marginLeft:25,
      marginTop:10
     },
     statustext:{
      marginLeft:30
     }
})