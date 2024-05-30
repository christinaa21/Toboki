import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const handleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const handleSave = () => {
    // Handle save logic here, e.g., send selectedGenres to backend
    console.log('Selected Genres:', selectedGenres);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Halo, User!</Text>
        <Text style={styles.headerSubtext}>
          Bantu kami untuk meningkatkan pengalaman membaca Anda
          dengan memilih beberapa opsi di bawah ini
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          Genre Buku Apa yang Anda Sukai?
        </Text>
        <Text style={styles.sectionSubtitle}>
          Pilih hingga tiga opsi untuk masing-masing kategori
        </Text>
        <View style={styles.genreContainer}>
          <Text style={styles.genreCategory}>Fiksi</Text>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Novel') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Novel')}
          >
            <Text style={styles.genreButtonText}>Novel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Romantis') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Romantis')}
          >
            <Text style={styles.genreButtonText}>Romantis</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Fantasi') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Fantasi')}
          >
            <Text style={styles.genreButtonText}>Fantasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Puisi') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Puisi')}
          >
            <Text style={styles.genreButtonText}>Puisi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Horror') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Horror')}
          >
            <Text style={styles.genreButtonText}>Horror</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Fiksi Sejarah') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Fiksi Sejarah')}
          >
            <Text style={styles.genreButtonText}>Fiksi Sejarah</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.genreContainer}>
          <Text style={styles.genreCategory}>Nonfiksi</Text>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Pengembangan Diri') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Pengembangan Diri')}
          >
            <Text style={styles.genreButtonText}>Pengembangan Diri</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Biografi') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Biografi')}
          >
            <Text style={styles.genreButtonText}>Biografi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Sains') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Sains')}
          >
            <Text style={styles.genreButtonText}>Sains</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Sejarah') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Sejarah')}
          >
            <Text style={styles.genreButtonText}>Sejarah</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Psikologi') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Psikologi')}
          >
            <Text style={styles.genreButtonText}>Psikologi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genreButton, selectedGenres.includes('Politik') && styles.selectedButton]}
            onPress={() => handleGenreSelection('Politik')}
          >
            <Text style={styles.genreButtonText}>Politik</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Simpan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButton} onPress={() => console.log('Skip pressed')}>
          <Text style={styles.buttonText}>Lewati</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/personalisasi.png')} // Replace with your background image path
        style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  headerSubtext: {
    fontSize: 16,
    color: '#616161',
    marginTop: 10,
    textAlign: 'center',
  },
  content: {
    padding: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#616161',
    marginBottom: 20,
  },
  genreContainer: {
    marginBottom: 20,
  },
  genreCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genreButton: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  genreButtonText: {
    fontSize: 16,
    color: '#2196F3',
  },
  footer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  saveButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  skipButton: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
  },
});

export default App;
