import React from 'react';
import {Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Button, H1} from 'native-base';

const MainScreen = ({navigation, route}) => {
  return (
    <ScrollView style={{backgroundColor: '#383CC1'}}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <H1 style={styles.headerTitleStyle}>Click here:)</H1>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('WebRequest')}>
        <Text style={{color: '#eee'}}>Web Request App</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#eee'}}>Netflix App</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('TicTacToe')}>
        <Text style={{color: '#eee'}}>TicTacToe game</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('FlexDirectionBasics')}>
        <Text style={{color: '#eee'}}>FlexDirection App</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('ProfilePic')}>
        <Text style={{color: '#eee'}}>Profile Pic App</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('CurrenceyApp')}>
        <Text style={{color: '#eee'}}>Currencey App</Text>
      </Button>

      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('SpanishNumber')}>
        <Text style={{color: '#eee'}}>Spanish Number App</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('RollerDice')}>
        <Text style={{color: '#eee'}}>RollerDice App</Text>
      </Button>
      <Button
        style={styles.btn}
        rounded
        block
        onPress={() => navigation.navigate('TapMe')}>
        <Text style={{color: '#eee'}}>TapMe App</Text>
      </Button>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
  },
  headerTitleStyle: {
    textAlign: 'center',
    color: '#00b7c2',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
});
