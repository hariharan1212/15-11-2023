import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Chatcamera from '../headder_camera/camera'
import Userprofile from '../headder_profile/profile'
import Chatcompose from '../compose_button/compose'
import Chatinput from '../chat_searchbar/searchbar'

export default function Chatheadder({search,setSearch,items}) {
  return (   
       <>   
        <View style={style.chat_headder}>
                     <Userprofile/>
                      <Chatinput 
                        search={search}
                        setSearch={setSearch}
                        items={items}
                       />
                      <Chatcompose/>
                      <Chatcamera />
        </View>
            </>
  )
}

const style = StyleSheet.create({
    chat_headder:{
        flexDirection:"row",
        backgroundColor:"whitesmoke",
        height:60,
        width:"100%"
    }
})