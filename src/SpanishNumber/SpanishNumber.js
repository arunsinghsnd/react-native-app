/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('../../assets/one.wav'),
  require('../../assets/two.wav'),
  require('../../assets/three.wav'),
  require('../../assets/four.wav'),
  require('../../assets/five.wav'),
  require('../../assets/six.wav'),
  require('../../assets/seven.wav'),
  require('../../assets/eight.wav'),
  require('../../assets/nine.wav'),
  require('../../assets/ten.wav'),
];

const SpanishNumber = () => {
  const playSound = sound => {
    const soundvar = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('NOT ABLE TO PLAY SOUND');
      }
    });

    setTimeout(() => {
      soundvar.play();
    }, 1000);

    soundvar.release();
  };

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map(sound => (
          <TouchableOpacity
            key={sound}
            onPress={() => {
              playSound(sound);
            }}
            style={styles.box}>
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default SpanishNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 5,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
