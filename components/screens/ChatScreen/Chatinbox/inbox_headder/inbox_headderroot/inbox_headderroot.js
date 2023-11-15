import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Profilepic from './profilepic/profilepic'
import Profilename from './profilename/profilename'
import Mediaicon from './mediaicon/mediaicon'

export default function Chatinputscreenheadder() {
  return (
    <>
    <View style={style.headder}>
        {/* <Image source={require("../../../../../components/assets/images/userprofile.png")} style={style.image}/> */}
        <Profilepic />
        <Profilename />
        <Mediaicon/>
        {/* <Text>RohitShetty</Text> */}
        {/* <Image source={require("../../../../../components/assets/images/Chats_Menu.png")} style={style.image}/> */}
    </View>
    </>
  )
}

const style = StyleSheet.create({
    headder:{
        height:80,
        backgroundColor:"whitesmoke",
        flexDirection:"row"
    },
    image:{
        height:50,
        width:50,
        marginLeft:70,
        marginTop:10
    }
})
