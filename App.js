import React from 'react';
import CurrenceyApp from './src/CurrenceyApp';
import FlexDirectionBasics from './src/FlexDirection/FlexDirectionBasics';
import ProfilePic from './src/ProfilePic';
import RollerDice from './src/RollerDice';
import SpanishNumber from './src/SpanishNumber';
import TapMe from './src/TapMe';
import TicTacToe from './src/TicTacToe/TicTacToe';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// bring in all screens that
import Home from './src/Netflix/Screens/Home';
import Add from './src/Netflix/Screens/Add';
import Edit from './src/Netflix/Screens/Edit';
import MainScreen from './src/MainScreen';
import WebRequest from './src/WebRequest/WebRequest';
import JokeRequest from './src/JokeRequest/JokeRequest';
import GithubRequest from './src/GithubInfo/GithubRequest';
import Search from './src/GithubInfo/Screens/Search';
import ShowProfile from './src/GithubInfo/Screens/ShowProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <TapMe /> */}
      {/* <RollerDice /> */}
      {/* <SpanishNumber /> */}
      {/* <CurrenceyApp /> */}
      {/* <ProfilePic /> */}
      {/* <FlexDirectionBasics /> */}
      {/* <TicTacToe /> */}
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen
          name="Main Home"
          component={MainScreen}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Main Screen',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Netflix App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="TicTacToe"
          component={TicTacToe}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Tic Tac Toe App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="FlexDirectionBasics"
          component={FlexDirectionBasics}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Flex Direction App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="ProfilePic"
          component={ProfilePic}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Profile Pic App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="CurrenceyApp"
          component={CurrenceyApp}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Currencey App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="SpanishNumber"
          component={SpanishNumber}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Spanish Number App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="RollerDice"
          component={RollerDice}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'RollerDice App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="TapMe"
          component={TapMe}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'TapMe App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="WebRequest"
          component={WebRequest}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Web Request App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="JokeRequest"
          component={JokeRequest}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'Joke Request App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'GitHub User Info App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
        <Stack.Screen
          name="ShowProfile"
          component={ShowProfile}
          options={{
            headerStyle: {
              backgroundColor: '#0f4c75',
            },
            title: 'GitHub User Show Profile Info App',
            headerTitleStyle: {
              textAlign: 'center',
              color: '#00b7c2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
