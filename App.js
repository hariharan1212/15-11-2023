import React, { useState, useEffect } from 'react';
import { View, Text, Image,TextInput,Button, TouchableOpacity, ScrollView,FontSelector, IconButton, StyleSheet, FlatList   } from 'react-native';
import BottomBar from './components/screens/NavigationScreen/BottomBar/BottomBar';
import TopBar from './components/screens/NavigationScreen/TopBar/TopBar';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={styles.container}>
      <TopBar/>
      <View>
      </View>
      <BottomBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set your desired background color
  },
  content: {
    flex: 1,
  },
});

export default App;
