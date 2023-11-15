import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.title}>Filmhook</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: 'blue',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TopBar;