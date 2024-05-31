import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Category from '../Category';

export default function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1 }}>
        {/* Header Section */}
        <View style={{ height: 84, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => alert('Go to Beranda')}>
            <Text style={{ color: '#4A5C9C', fontSize: 32, fontWeight: 'bold', marginLeft: 25, marginTop: 20 }}>
              Buku
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Go to Notifications')}>
            <Ionicons name="notifications-outline" size={32} color="#4A5C9C" style={{ marginRight: 25, marginTop: 20 }} />
          </TouchableOpacity>
        </View>


        <View style={{ height: 30, flexDirection: 'row', alignItems: 'flex-start', borderBottomColor: '#CCCCCC', paddingBottom: 10 }}>
          <Text style={{ marginLeft: 25, fontSize: 14, fontWeight: 'bold', color: '#4A5C9C', textDecorationLine: 'underline', textDecorationStyle: 'bold' }}>
            Toko Buku
          </Text>
          <Text style={{ marginLeft: 25, fontSize: 14, color: '#CCCCCC' }}>
            Bukumu
          </Text>
        </View>


        <View style={{ flex: 1, paddingTop: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', paddingHorizontal: 25 }}>
            Sedang Tren
          </Text>

        </View>

    
        <View style={{ height: 211, marginTop: 20, alignItems: 'flex-start', position: 'absolute', top: 135, marginLeft: 15 }}>
          <ScrollView horizontal={true}>
            <Category imageUri={require('../../assets/buku-tren-1.png')} name="The Sacred Well Murders" subname="Susan Rowland" />

            <Category imageUri={require('../../assets/buku-tren-2.png')} name="Immoral Origins" subname="Lee Matthew Goldberg" />

            <Category imageUri={require('../../assets/buku-tren-3.png')} name="Where The Crawdads Sing" subname="Delia Owens" />

          </ScrollView>
        </View>

        <View style={{ flex: 1, paddingTop: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: 'bold', paddingHorizontal: 25, position: 'absolute', bottom: 370 }}>
            Fantasi
          </Text>

        </View>

       <View style={{ height: 211, marginTop: 20, alignItems: 'flex-start', position: 'absolute', top: 400, marginLeft: 15 }}>
          <ScrollView horizontal={true}>
            <Category imageUri={require('../../assets/buku-fantasi-1.png')} name="The Empeeror and The Endless Palace" subname="Justinian Huang" />

            <Category imageUri={require('../../assets/buku-fantasi-2.png')} name="A Feather So Black" subname="Lyra Selene" />

            <Category imageUri={require('../../assets/buku-fantasi-3.png')} name="The Morningside The Crawdads Sing" subname="Tea Obreht" />

          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
}
