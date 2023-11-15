import React,{useState} from 'react'
import { Image , TouchableOpacity , Text ,Modal } from 'react-native'

// function modal(){ 

//   const [isVisible, setIsVisible] = useState(false);  
//   console.log("clicked")
//   return ( 
//     <> 
//     <Modal 
//     isVisible={isVisible}
//     onRequestClose={() => setIsVisible(false)}
//     animationType='slide'
//     >
//    <Text> Hello World</Text>
//   </Modal>
//   </>
// )
// } 


export default function Userprofile() {

  const handleOpenDrawer = () => {
    console.log("clicked")
  }

  return (
    <>
     <TouchableOpacity onPress={handleOpenDrawer}>
        <Image source={require('../../../../../../components/assets/images/userprofile.png')} style={{width:45,height:45,marginLeft:10,marginTop:10}} />
    </TouchableOpacity>
    </>
  )
}
