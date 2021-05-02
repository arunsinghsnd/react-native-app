/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem} from 'native-base';
import moment from 'moment';

const ShowProfile = ({user}) => {
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          style={styles.image}
          source={{uri: user.avatar_url, width: 150, height: 250}}
        />
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{user.bio}</Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text style={{color: '#fff'}}>
          Created At {moment(user.created_at).format('DD-MM-YY')}
        </Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text style={{color: '#fff'}}>
          Updated At {moment(user.updated_at).format('DD-MM-YY')}
        </Text>
      </CardItem>
    </Card>
  );
};

export default ShowProfile;

const styles = StyleSheet.create({
  card: {
    width: '98%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 40,
  },
  cardItem: {
    backgroundColor: '#4f8a8b',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderColor: '#fbd46d',
    marginTop: -50,
  },
  text: {
    color: '#eeeeee',
  },
});
