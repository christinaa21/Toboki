import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ClubDetails = () => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
    Alert.alert(
      "Selamat Kamu Telah Bergabung",
      "",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
    setTimeout(() => setJoined(false), 5000);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: 'image_background_url' }} style={styles.headerImage}>
        <Text style={styles.clubName}>Pecinta Fiksi</Text>
        {!joined && (
          <TouchableOpacity style={styles.joinButton} onPress={handleJoin}>
            <Text style={styles.joinButtonText}>Gabung</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
      <View style={styles.membersInfo}>
        <Text style={styles.membersText}>20 Members</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Klub untuk para pembaca yang menyukai genre fiksi! Baca bareng tiap selasa dan kamis.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerImage: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clubName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  joinButton: {
    marginTop: 10,
    backgroundColor: '#5067FF',
    padding: 10,
    borderRadius: 5,
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  membersInfo: {
    padding: 10,
    alignItems: 'center',
  },
  membersText: {
    fontSize: 16,
  },
  description: {
    padding: 10,
  },
  descriptionText: {
    fontSize: 16,
  },
});

export default ClubDetails;
