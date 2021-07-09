/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const TapMe = () => {
  const [randomColor, setRandomColor] = useState('rgb(32 , 10 , 126)');

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';

    setRandomColor(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}>Tap me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TapMe;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: '#FFFFFF',
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
