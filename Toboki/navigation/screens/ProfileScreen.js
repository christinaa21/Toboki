import * as React from 'react';
import { StyleSheet, Image, SafeAreaView, View, Text, TouchableOpacity, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function ProfileScreen({navigation}) {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <View style={{ height: 84, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth:3, borderBottomColor: '#D9D9D9' }}>
              <TouchableOpacity onPress={() => alert('Go to Beranda')}>
                <Text style={{ color: '#4A5C9C', fontSize: 32, fontWeight:'bold', marginLeft: 25, marginTop: 20 }}>
                  Profil
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Go to Notifications')}>
                <Ionicons name="notifications-outline" size={32} color="#4A5C9C" style={{ marginRight: 25, marginTop: 20 }} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: 'row'}}>
              <Image source={require('../../assets/profil-utama.png')} style={{ marginLeft: 25, marginTop: 20}}/>
              <View>
                <Text style={{ marginLeft: 20, fontWeight: 'bold', color: '#4A5C9C', fontSize: 22, marginTop: 25}}>
                  Claire
                </Text>
                <Text style={{ marginTop: 5, marginLeft: 20, fontWeight: 500, color: '#9EA9D1', fontSize: 22, fontStyle: 'italic'}}>
                  @clairedelune
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Text style={{ marginLeft: 20, fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
                    5 following
                  </Text>
                  <Text style={{ marginLeft: 20, fontSize: 14, fontWeight: 'bold', marginTop: 10}}>
                    5 followers
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'column'}}>
              <Button
                title="edit profil"
                onPress={() => { /* Handle button press here */ }}
                style={{
                  borderWidth: 2, // Adjust as needed for border thickness
                  borderColor: '#000',
                  borderRadius: 10,
                  paddingHorizontal: 10, // Reduce padding for better spacing
                  paddingVertical: 5, // Reduce padding for better spacing
                  backgroundColor: 'transparent',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  width: '100%',
                }}
              />
              <View style={{flexDirection: 'row', justifyContent: 'space-between',borderBottomColor: 'rgba(126, 126, 126, 0.5)', borderBottomWidth: 0.5, paddingBottom: 20}}>
                <Text style={{marginLeft: 20, fontWeight: 'bold', marginTop: 20}}>
                  Post
                </Text>
                <Text style={{color: '#7E7E7E', marginTop: 20}}>
                  Club
                </Text>
                <Text style={{color: '#7E7E7E', marginTop: 20}}>
                  Review
                </Text>
                <Text style={{color: '#7E7E7E', marginTop: 20}}>
                  Reading List
                </Text>
                <Text style={{color: '#7E7E7E', marginRight: 20, marginTop: 20}}>
                  Target
                </Text>
              </View>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Image source={require('../../assets/mini-profile.png')} style={{ marginLeft: 25, marginTop: 10 }} />
                <View>
                  <Text style={{ marginLeft: 20, fontWeight: 'bold', color: '#4A5C9C', fontSize: 14, marginTop: 16 }}>
                    Claire
                  </Text>
                  <Text style={{ marginTop: 0, marginLeft: 20, fontWeight: 500, color: '#9EA9D1', fontSize: 14, fontStyle: 'italic' }}>
                    @clairedelune
                  </Text>
                </View>
              </View>
            </View>
            <View style={{flex: 1.7, marginLeft: 30}}>
              <Text style ={{ marginRight: 20, lineHeight: 20}}>
                Can we talk about how Sherlock Holmes is the original master of deduction? His methods still fascinate and inspire us today.
              </Text>
            </View>
            <View style={{position: 'absolute', bottom: 240, flexDirection: 'row', borderBottomColor: 'black'}}>
            <Ionicons name="heart-outline" size={32} color="#4A5C9C" style={{ marginRight: 25, marginLeft: 28, marginTop: -2}} />
            <Ionicons name="chatbox-outline" size={28} color="#4A5C9C" />
            <Ionicons name="arrow-redo-outline" size={32} color="#4A5C9C" style={{marginTop: -3, marginLeft: 250}}/>
          </View>
          </View>
        </SafeAreaView>
    );
}