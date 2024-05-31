import * as React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ flex: 1 }}>
            <View style={{ height: 84, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => alert('Go to Beranda')}>
                <Text style={{ color: '#4A5C9C', fontSize: 32, fontWeight:'bold', marginLeft: 25, marginTop: 20 }}>
                  Beranda
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => alert('Go to Notifications')}>
                <Ionicons name="notifications-outline" size={32} color="#4A5C9C" style={{ marginRight: 25, marginTop: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ position: 'absolute', top: 80, flexDirection: 'row', flexWrap: 'wrap'}}>
                <Image source={require('../../assets/mini-profile-elise.png')} style={{ marginLeft: 20, marginTop: 10 }} />
                <View>
                  <Text style={{ marginLeft: 20, fontWeight: 'bold', color: '#4A5C9C', fontSize: 14, marginTop: 16 }}>
                    Elise
                  </Text>
                  <Text style={{ marginTop: 0, marginLeft: 20, fontWeight: 500, color: '#9EA9D1', fontSize: 14, fontStyle: 'italic' }}>
                    @furelise
                  </Text>
                </View>
          </View>

          <View style={{position: 'abolute', top: -560, marginLeft: 30}}>
              <Text style ={{ marginRight: 20, lineHeight: 20}}>
                This is my best read ever! The emotion, the plot, everything is just great. You guys should read it too! It’s called TCGF by Mo Xiang Tong Xiu
              </Text>
            </View>
            <View style={{position: 'absolute', bottom: 530, flexDirection: 'row'}}>
            <Ionicons name="heart-outline" size={32} color="#4A5C9C" style={{ marginRight: 25, marginLeft: 28, marginTop: -2}} />
            <Ionicons name="chatbox-outline" size={28} color="#4A5C9C" />
            <Ionicons name="arrow-redo-outline" size={32} color="#4A5C9C" style={{marginTop: -3, marginLeft: 250}}/>
          </View>
          <View style={{borderBottomColor: 'black', width: '100%', height: 1, marginTop: 10}}>
          <Text>
          Ya
          </Text>
          </View>
        </SafeAreaView>
    );
}
