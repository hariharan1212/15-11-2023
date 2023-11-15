import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import HomeRoot from '../../HomeScreen/HomeRoot/Home';
import ChatRoot from '../../ChatScreen/ChatRoot/Chat';
import SearchRoot from '../../SearchScreen/SearchRoot/Search';

import ProfileRoot from '../../UserProfileScreen/ProfileRoot/Profile';
import 'react-native-gesture-handler';
import Audition from '../../AuditionScreen/AuditionRoot/Audition';

const Tab = createMaterialBottomTabNavigator();
const BottomBar = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator  initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: '#694fad' }}>
            <Tab.Screen name='Home' component={HomeRoot}/>
            <Tab.Screen name='Chat' component={ChatRoot}/>
            <Tab.Screen name='Search' component={SearchRoot}/>
            <Tab.Screen name='Audition' component={Audition}/>
            <Tab.Screen name='Profile' component={ProfileRoot}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomBar;