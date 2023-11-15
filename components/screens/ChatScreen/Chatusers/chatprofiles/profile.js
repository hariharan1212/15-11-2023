import React from 'react'
import { StyleSheet, View ,Text,TouchableWithoutFeedback, FlatList,Image} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import {withNavigation} from "react-native"

const stack = createNativeStackNavigator()

export default function Chatprofiles({items}) {

     const handlepress =(e)=>{
          console.log(e)
     }
  
  return (
    <>
       <TouchableWithoutFeedback onPress={(e)=>handlepress(e)}>
       <View >

        {/* <View style={style.Chatprofiles}>
             <Text style={style.Chatprofiles_name}>{Name}</Text>
        </View> */}

        <FlatList 
         data={items}
         renderItem={({item})=>(
            <View style={style.Chatprofiles}>
            <Text style={style.Chatprofiles_name}>{item.name}</Text>
            <Text style={style.Chatprofiles_profession}> {item.Profession} </Text>
            <Text style={style.Chatprofiles_message}>{item.Message}</Text>
            <Text style={style.Chatprofiles_time}>{item.Time}</Text>
            <Image source={require("../../../../../components/assets/images/userprofile.png")} style={style.Chatprofiles_photo}/>
           </View>
         )}
         keyExtractor={item=>item.id}
        />
        </View>
        </TouchableWithoutFeedback>
    </>
  )
}

const style = StyleSheet.create({
    Chatprofiles:{
        height:100,
        width:"90%",
        borderRadius:20,
        marginTop:20,
        marginLeft:20,
        borderWidth:1,
        borderColor:"black"
    },
    Chatprofiles_name:{
        marginLeft:100,
        marginTop:10,
        fontSize:20,
        fontWeight:"900",
        color:"black"
    },
    Chatprofiles_profession:{
        marginLeft:95,
        fontSize:15
    },
    Chatprofiles_message:{
        marginLeft:100, 
        fontSize:21
    },
    Chatprofiles_time:{
         marginTop:-80,
         marginLeft:300
    },
    Chatprofiles_photo:{
        width:60,
        height:60,
        borderWidth:1,
        borderRadius:40,
        marginLeft:15,
        marginTop:-15
    }
})

