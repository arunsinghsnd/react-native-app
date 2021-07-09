import React from 'react';
import {View, StyleSheet} from 'react-native';

const FlexApp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexOne} />
      <View style={styles.flexTwo} />
      <View style={styles.flexThree} />
    </View>
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
