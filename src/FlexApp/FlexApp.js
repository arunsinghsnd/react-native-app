/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
} from 'react-native';

const FlexApp = () => {
  return (
    <ImageBackground
      source={{uri: 'https://reactjs.org/logo-og.png'}}
      style={{width: '100%', height: '100%'}}>
      {/* <View style={styles.container}>
        <View style={styles.flexOne} />
        <View style={styles.flexTwo} />
        <View style={styles.flexThree} />
      </View> */}
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
        color="#841584"
      />
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
          <Text
            style={{
              color: '#eee',
              fontSize: 20,
              fontWeight: 'bold',
              alignItems: 'center',
            }}>
            Hi, I'm Arun Kumar Singh
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default FlexApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flexOne: {
    flex: 1,
    backgroundColor: 'red',
  },
  flexTwo: {
    flex: 2,
    backgroundColor: 'darkorange',
  },
  flexThree: {
    flex: 3,
    backgroundColor: 'green',
  },
});
