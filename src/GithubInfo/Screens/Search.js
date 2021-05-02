/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Container, Form, Item, Input, Button, H1} from 'native-base';
import Axios from 'axios';
import ShowProfile from './ShowProfile';

const Search = ({navigation}) => {
  const [user, setUser] = useState({});
  const [name, setName] = useState('arunsinghsnd');
  const [nameFromClick, setNameFromClcik] = useState('arunsinghsnd');

  useEffect(() => {
    Axios.get(`https://api.github.com/users/${nameFromClick}`)
      .then(response => setUser(response.data))
      .catch(error => console.log(error));
  }, [nameFromClick]);

  const handler = () => {
    setNameFromClcik(name);
  };

  return (
    <Container style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <H1 style={styles.heading}>Enter any GitHub User Name</H1>
        <ShowProfile user={user} />
        <Form>
          <Item rounded style={styles.formItem}>
            <Input
              placeholder="enter user name"
              style={{color: '#eee'}}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
          </Item>
        </Form>
        <Button
          disable={!nameFromClick}
          rounded
          block
          onPress={() => handler()}>
          <Text style={{color: '#eee'}}>Search Now</Text>
        </Button>
      </ScrollView>
    </Container>
  );
};

export default Search;

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
