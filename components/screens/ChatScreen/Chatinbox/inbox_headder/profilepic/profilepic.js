import React from 'react'
import { Image,StyleSheet } from 'react-native'

export default function Profilepic() {
  return (
    <>
     <Image source={require("../../../../../../components/assets/images/userprofile.png")} style={style.image}/> 
    </>
  )
}

const style = StyleSheet.create({
    image:{
        height:50,
        width:50,
        marginLeft:70,
        marginTop:10
    }
})
