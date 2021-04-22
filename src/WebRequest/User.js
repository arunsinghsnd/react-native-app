/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {Card, CardItem} from 'native-base';
import moment from 'moment';

const User = ({details}) => {
  return (
    <Card style={styles.card}>
      <CardItem cardBody style={styles.cardItem}>
        <Image
          style={styles.image}
          source={{uri: details.picture?.large, width: 150, height: 250}}
        />
      </CardItem>
      <CardItem style={styles.cardItem}>
        <Text style={styles.text}>
          {details.name?.title} {details.name?.first} {details.name?.last}
        </Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.cell}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>{details.email}</Text>
      </CardItem>
      <CardItem bordered style={styles.cardItem}>
        <Text style={styles.text}>
          Location: {details.location.city}, {details.location.state},{' '}
          {details.location.country}
        </Text>
      </CardItem>
      <CardItem footer style={styles.cardItem}>
        <Text style={{color: '#fff'}}>
          Registered At {moment(details.registered?.date).format('DD-MM-YY')}
        </Text>
      </CardItem>
    </Card>
  );
};

export default User;

const styles = StyleSheet.create({
  card: {
    width: '98%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#4f8a8b',
    borderColor: '#4f8a8b',
    borderWidth: 2,
    borderRadius: 20,
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
