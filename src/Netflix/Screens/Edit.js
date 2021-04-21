/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Container, Form, Item, Input, Button, H1} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

const Edit = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [totaleNoSeason, setTotaleNoSeason] = useState('');
  const [id, setId] = useState(null);

  const update = async () => {
    try {
      if (!name || !totaleNoSeason) {
        return alert('Please enter value in both fields');
      }

      const seasontoUpdate = {
        id,
        name,
        totaleNoSeason,
        isWatched: false,
      };

      const storedValue = await AsyncStorage.getItem('@season_list');
      const list = await JSON.parse(storedValue);

      list.map(singleSeason => {
        if (singleSeason.id == id) {
          singleSeason.name = name;
          singleSeason.totaleNoSeason = totaleNoSeason;
        }
        return singleSeason;
      });
      await AsyncStorage.setItem('@season_list', JSON.stringify(list));

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const {season} = route.params;
    const {id, name, totaleNoSeason} = season;

    setId(id);
    setName(name);
    setTotaleNoSeason(totaleNoSeason);
  }, []);
  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Add to watch List</H1>
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Season name"
              style={{color: '#eee'}}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          </Item>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="Total no of Season"
              value={totaleNoSeason}
              onChangeText={text => {
                setTotaleNoSeason(text);
              }}
              style={{color: '#eee'}}
            />
          </Item>
          <Button rounded block onPress={update}>
            <Text style={{color: '#eee'}}>Update</Text>
          </Button>
        </Form>
      </ScrollView>
    </Container>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'flex-start',
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginHorizontal: 5,
    marginTop: 50,
    marginBottom: 20,
  },
  formItem: {
    marginBottom: 20,
  },
});
