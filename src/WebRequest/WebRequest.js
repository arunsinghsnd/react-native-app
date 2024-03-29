import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Axios from 'axios';
import {Button} from 'native-base';
import User from './User';

const WebRequest = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://randomuser.me/api/');
      const details = data.results[0];
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  if (!details) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View>
          <User details={details} />
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text>New User</Text>
          </Button>
        </View>
      </View>
    );
  }
};

export default WebRequest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
});
