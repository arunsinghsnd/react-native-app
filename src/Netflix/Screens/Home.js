/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Fab,
  List,
  ListItem,
  Left,
  Button,
  Icon,
  Body,
  Right,
  CheckBox,
  Title,
  H1,
  Text,
  Subtitle,
  Container,
  Spinner,
} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {useIsFocused} from '@react-navigation/native';

const Home = ({navigation, route}) => {
  const [listOfSeasons, setListOfSeasons] = useState([]);
  const [loading, setLoading] = useState(false);

  const isFocused = useIsFocused();
  const getList = async () => {
    setLoading(true);

    const storedValue = await AsyncStorage.getItem('@season_list');

    if (!storedValue) {
      setListOfSeasons([]);
    }

    const list = JSON.parse(storedValue);
    setListOfSeasons(list);

    setLoading(false);
  };
  const deleteSeasons = async id => {
    const newList = await listOfSeasons.filter(list => list.id !== id);
    await AsyncStorage.setItem('@season_list', JSON.stringify(newList));
    setListOfSeasons(newList);
  };
  const makeComplete = async id => {
    const newArr = listOfSeasons.map(list => {
      if (list.id == id) {
        list.isWatched = !list.isWatched;
      }
      return list;
    });
    await AsyncStorage.setItem('@season_list', JSON.stringify(newArr));
    setListOfSeasons(newArr);
  };

  useEffect(() => {
    getList();
  }, [isFocused]);

  if (loading) {
    return (
      <Container style={styles.container}>
        <Spinner color="#00b7c2" />
      </Container>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {listOfSeasons.length == 0 ? (
        <Container style={styles.container}>
          <H1 style={styles.heading}>
            Watchlist is empty. Please add a season
          </H1>
        </Container>
      ) : (
        <>
          <H1 style={styles.heading}>Next Series to watch</H1>
          <List>
            {listOfSeasons.map(season => (
              <ListItem key={season.id} style={styles.listItem} noBorder>
                <Left>
                  <Button
                    onPress={() => deleteSeasons(season.id)}
                    danger
                    style={styles.actionButton}>
                    <Icon name="trash" active />
                  </Button>
                  <Button
                    onPress={() => {
                      navigation.navigate('Edit', {season});
                    }}
                    style={styles.actionButton}>
                    <Icon active name="edit" type="Feather" />
                  </Button>
                </Left>
                <Body>
                  <Title style={styles.seasonName}>{season.name}</Title>
                  <Text note>{season.totaleNoSeason} season to watch</Text>
                </Body>
                <Right>
                  <CheckBox
                    onPress={() => makeComplete(season.id)}
                    checked={season.isWatched}
                  />
                </Right>
              </ListItem>
            ))}
          </List>
        </>
      )}
      <Fab
        style={{backgroundColor: '#5067FF'}}
        onPress={() => navigation.navigate('Add')}
        postion="bottomRight">
        <Icon name="add" />
      </Fab>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: '#1b262c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#1b262c',
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    color: '#00b7c2',
    marginVertical: 15,
    marginHorizontal: 5,
  },
  actionButton: {
    marginLeft: 5,
  },
  seasonName: {
    color: '#fdcb9e',
    textAlign: 'justify',
  },
  listItem: {
    marginLeft: 0,
    marginBottom: 20,
  },
});
