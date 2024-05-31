import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';

const PersonalisasiKomunitasScreen = () => {
  return (
    <ImageBackground source={require('../assets/personalisasi.png')} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>Bergabung dengan Komunitas</Text>
          <Text style={styles.description}>
            Pilih komunitas favoritmu atau buat sendiri!
          </Text>

          <View style={styles.communityContainer}>
            <Image
              source={require('../assets/komunitas1.png')}
              style={styles.communityImage}
            />
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Gabung</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.communityContainer}>
            <Image
              source={require('../assets/komunitas2.png')}
              style={styles.communityImage}
            />
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Buat Komunitas</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Simpan</Text>
          </TouchableOpacity>

          <Text style={styles.skipText}>Lewati</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A5C9C',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  communityContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  communityImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  joinButton: {
    backgroundColor: '#4A5C9C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 10,
  },
  joinButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#4A5C9C',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  skipText: {
    color: '#4A5C9C',
    fontSize: 14,
    marginTop: 10,
  },
});

export default PersonalisasiKomunitasScreen;
