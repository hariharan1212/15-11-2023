import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'

export default function Chatinput({search,setSearch}) {


  
  return (
    <>
    <View style={style.input_field}> 
       <TextInput 
        mode='outlined'
        label="Search"
        placeholder="search Here"
        value={search}
        style={style.input}
        onChangeText={(text)=>setSearch(text)}
       />
        <Image source={require("../../../../../../components/assets/images/search_icon.png")} style={style.image} />
    </View>
          </> 
  )
}

const style = StyleSheet.create({
    input_field:{
        width:"55%",
        height:100,
        position:"relative",
        marginTop:-4
    },
    input:{
        height:"50%",
        width:"100%",
        marginTop:15,
        marginLeft:15,
        backgroundColor:"whitesmoke",
        borderRadius:30,
        borderWidth:1,
        borderColor:"grey"
      },
      image:{
        height:30,
        width:30,
        position:"absolute",
        right:0,
        top:"25%"
      }
})
