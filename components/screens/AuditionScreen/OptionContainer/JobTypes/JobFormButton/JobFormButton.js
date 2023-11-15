import React, { Component } from "react";
import IconButton from '../JobFormButton/IconButton'

class App extends Component {
  render() {
    return (
      <IconButton
        source={require("../../../../../../components/assets/images/AuditionButton.png")}
        onPress={() => console.log("Button clicked")}
      />
    );
  }
}

export default App;