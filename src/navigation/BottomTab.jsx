import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: 'black',
          },
          tabBarInactiveTintColor: 'white',
          tabBarActiveTintColor: 'white',
          tabBarIcon: ({color}) => {
            let Icon;
            if (route.name === 'Home') {
              Icon = <Foundation name="home" size={25} color={color} />;
            } else if (route.name === 'Search') {
              Icon = <Ionicons name="search" size={25} color={color} />;
            } else if (route.name === 'Add') {
              Icon = <Feather name="plus-square" size={25} color={color} />;
            } else if (route.name === 'Reel') {
              Icon = (
                <MaterialCommunityIcons
                  name="movie-play-outline"
                  size={25}
                  color={color}
                />
              );
            } else {
              Icon = <FontAwesome name="user" size={25} color={color} />;
            }
            return Icon;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Add" component={HomeScreen} />
        <Tab.Screen name="Reel" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTab;
