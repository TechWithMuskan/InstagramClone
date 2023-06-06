import React from 'react';
import {ScrollView, Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Img1 from '../assets/img1.jpeg';
import Img2 from '../assets/img2.jpeg';
import Img3 from '../assets/img3.jpeg';
import Img4 from '../assets/img4.jpeg';
import Img5 from '../assets/img5.jpeg';
import Img6 from '../assets/img6.jpeg';
import Img7 from '../assets/img7.jpeg';
import Img8 from '../assets/img8.jpeg';

const Stories = [
  {
    id: 1,
    img: Img1,
    username: 'jolly67',
  },
  {
    id: 2,
    img: Img2,
    username: 'jolly67',
  },
  {
    id: 3,
    img: Img3,
    username: 'jolly67',
  },
  {
    id: 4,
    img: Img4,
    username: 'jolly67',
  },
  {
    id: 5,
    img: Img5,
    username: 'jolly67',
  },
  {
    id: 6,
    img: Img6,
    username: 'jolly67',
  },
  {
    id: 7,
    img: Img7,
    username: 'jolly67',
  },
  {
    id: 8,
    img: Img8,
    username: 'jolly67',
  },
];

const SubHeader = () => {
  return (
    <ScrollView horizontal style={styles.headerBackground}>
      <View style={styles.stories}>
        <Image source={Img8} style={styles.yourStory} />
        <AntDesign
          name="pluscircle"
          size={16}
          color="#2A93D5"
          style={styles.iconStyle}
        />
        <Text style={styles.usernameStyle}>Your story</Text>
      </View>
      {Stories.map(item => (
        <View style={styles.stories}>
          <LinearGradient
            colors={['#feda75', '#fa7e1e', '#d62976', '#962fbf']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.grediant}>
            <Image source={item.img} style={styles.imageStyle} />
          </LinearGradient>
          <Text style={styles.usernameStyle}>{item.username}</Text>
        </View>
      ))}
      <View style={styles.stories}>
        <Image source={Img1} style={styles.imageStyle} />
        <Text style={styles.usernameStyle}>Sallymont</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 18,
    height: 150,
  },
  yourStory: {
    height: 72,
    width: 72,
    borderRadius: 50,
    marginTop: 5,
    borderWidth: 4,
    borderColor: 'black',
  },
  imageStyle: {
    height: 72,
    width: 72,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 50,
    alignSelf: 'center',
  },
  grediant: {
    height: 77,
    width: 77,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  stories: {
    alignItems: 'center',
    marginRight: 15,
    position: 'relative',
  },
  usernameStyle: {
    color: 'white',
    marginTop: 8,
    fontSize: 13,
  },
  iconStyle: {
    position: 'absolute',
    top: 58,
    left: 50,
    backgroundColor: 'white',
    borderRadius: 50,
  },
});

export default SubHeader;
