import React from 'react'
import { Image ,TouchableOpacity} from 'react-native'

export default function Chatcompose() {
  return (
     <>
     <TouchableOpacity>
         <Image source={require('../../../../../../components/assets/images/writeicon.png')} style={{width:40,height:40,marginLeft:20,marginTop:15}} />
      </TouchableOpacity>
     </>
  )
}
