import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Axios from 'axios';
import {Button} from 'native-base';
import Joke from './Joke';

const JokeRequest = () => {
  const [details, setDetails] = useState(null);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get('https://api.chucknorris.io/jokes/random');
      const details = data;
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
          <Joke details={details} />
          <Button rounded style={styles.button} onPress={() => fetchDetails()}>
            <Text>Click to New Joke</Text>
          </Button>
        </View>
      </View>
    );
  }
};

export default JokeRequest;

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
