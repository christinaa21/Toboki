import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Link } from "expo-router";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    window.location.href = '/home';
  };

  return (
    <ImageBackground source={require('../assets/login.png')} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Selamat Datang!</Text>
        <Text style={styles.text}>Silakan login untuk mengakses ratusan buku dan berinteraksi dengan komunitas!</Text>

        <TextInput
          style={styles.input}
          placeholder="Masukkan username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Masukkan password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>Belum memiliki akun? <Text style={styles.signupLink} onPress={() => navigation.navigate('signUp')}>SIGN UP</Text></Text>

        <Text style={styles.orText}>OR</Text>

        <View style={styles.googleFacebook}>
          <Image
            source={require('../assets/Google.png')}
            style={styles.googleFacebookButton}
          />
          <Image
            source={require('../assets/Facebook.png')}
            style={styles.googleFacebookButton}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 25,
    borderRadius: 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop:160,
    shadowColor:'black', 
    shadowOpacity:0.25,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 4}
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4A5C9C',
    textAlign: 'center'
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#6678B7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  signupText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign:'center'
  },
  signupLink: {
    color: '#6678B7',
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  googleFacebook: {
    flex:1,
    flexDirection: 'row',
    alignSelf:'center',
  },
  googleFacebookButton: {
    marginLeft: 10,
    marginRight: 10,
  }
});

export default LoginScreen;