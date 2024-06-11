import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const posts = [
  {
    id: '1',
    username: 'Elise',
    userhandle: '@furelise',
    time: '05 Mei 2024 • 7:08 PM',
    content: 'This is my best read ever! The emotion, the plot, everything is just great. You guys should read it too! It\'s called TCGF by Mo Xiang Tong Xiu',
    imageUrl: '../assets/login.png'
  },
  {
    id: '2',
    username: 'Luna',
    userhandle: '@moonlightsonata',
    time: '',
    content: 'Looking for fellow bookworms who enjoy getting lost in a good story. Any recommendations?',
    imageUrl: ''
  }
];

const HomePage = () => {
  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.username}>{item.username}</Text>
      <Text style={styles.userhandle}>{item.userhandle}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.content}>{item.content}</Text>
      {item.imageUrl ? (
        <Image source={item.imageUrl} style={styles.image} />
      ) : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  postContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userhandle: {
    fontSize: 14,
    color: 'gray',
  },
  time: {
    fontSize: 12,
    color: 'gray',
  },
  content: {
    fontSize: 14,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default HomePage;
