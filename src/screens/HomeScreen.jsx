import React from 'react';
import {View} from 'react-native';
import Header from '../components/Header';
import InstaPost from '../components/InstaPost';
import InstaStories from '../components/InstaStories';

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <InstaStories />
      <InstaPost />
    </View>
  );
};

export default HomeScreen;
