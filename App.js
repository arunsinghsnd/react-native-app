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
      <Stack.Navigator initialRouteName="Home">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
