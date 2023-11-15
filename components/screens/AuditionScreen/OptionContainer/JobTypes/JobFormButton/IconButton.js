import React, { Component } from "react";
import { Image, TouchableOpacity ,StyleSheet} from "react-native";

class IconButton extends Component {
  render() {
    return (
      <TouchableOpacity  onPress={() => this.props.onPress()}>
        <Image style={style.Button} source={this.props.source} />
      </TouchableOpacity>
    );
  }
}

export default IconButton;

const style=StyleSheet.create({
    Button:{
        width:60,
        height:60,
        borderRadius:20,
        backgroundColor:"cyan",
        marginTop:520,
        marginLeft:330,
        borderWidth:1,
        borderColor:'black'
    }
})