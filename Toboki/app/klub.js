import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";

const BookClubCard = ({ title, members, image }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{title}</Text>
    <Text>{members} Members</Text>
  </View>
);

const BookClubApp = () => {
  const router = useRouter();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Berdasarkan Seleramu</Text>
      <ScrollView horizontal>
        <BookClubCard title="Pecinta Fiksi" members="20" image="image_url_1" />
        <BookClubCard title="Bandung Book Lovers" members="20" image="image_url_2" />
        <BookClubCard title="Good Reads" members="20" image="image_url_3" />
      </ScrollView>
      <Text style={styles.header}>Populer</Text>
      <ScrollView horizontal>
        <BookClubCard title="Penikmat Agatha Christie" members="20" image="image_url_4" />
        <BookClubCard title="Novel Klasik" members="20" image="image_url_5" />
        <BookClubCard title="Shakespearian" members="20" image="image_url_6" />
      </ScrollView>
      <Link to="/clubDetails" style={styles.addButton}>
        <Ionicons name="add" size={30} color="white" />
      </Link>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  addButton: {
    position: 'absolute',
    right: 30,
    bottom: 30,
    backgroundColor: '#4A5C9C',
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
});

export default BookClubApp;
