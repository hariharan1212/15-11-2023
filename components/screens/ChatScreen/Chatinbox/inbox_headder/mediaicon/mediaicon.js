import React from 'react'
import { Image,StyleSheet} from 'react-native'

export default function Mediaicon() {
  return (
    <>
    <Image source={require("../../../../../../components/assets/images/Chats_Menu.png")} style={style.image}/>
    </>
  )
}

const style = StyleSheet.create({
    image:{
        height:50,
        width:50,
        marginLeft:60,
        marginTop:15
    }
})

