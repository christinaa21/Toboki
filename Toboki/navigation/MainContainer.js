import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import ProfileScreen from './screens/ProfileScreen'; 

//Screen names
const homeName = "HomeHe";
const detailsName = "Details";
const settingsName = "Settings";
const profileName = "Profile"; 

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === detailsName) {
              iconName = focused ? 'people' : 'people-outline';
            } else if (rn === settingsName) {
              iconName = focused ? 'book' : 'book-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline'; 
            }

            return <Ionicons name={iconName} size={45} color={color} />; 
          },
        
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 89, // Adjust height for the bottom tab bar
            paddingBottom: 22, // Set bottom padding to 22
            paddingTop: 22, // Set top padding to 22
          },
        })}
        tabBarOptions={{
          activeTintColor: '#F9B95A',
          inactiveTintColor: '#4A5C9C',
          tabBarShadowStyle: {
            elevation: 5, //
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 5,
            shadowOffset: {
              width: 0,
              height: -5,
            },
          },
        }}>

    <Tab.Screen 
    name={homeName} 
    component={HomeScreen}
    options={{ headerShown: false }}
    />
    <Tab.Screen 
    name={detailsName} 
    component={DetailsScreen} 
    options={{ headerShown: false }}
    />
    <Tab.Screen 
    name={settingsName} 
    component={SettingsScreen}
    options={{ headerShown: false }}
    />
    <Tab.Screen 
    name={profileName} 
    component={ProfileScreen} 
    options={{ headerShown: false }}
    // Atur judul untuk tab Profil
    />



      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
