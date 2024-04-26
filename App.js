import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Home';
import Stores from './src/Stores';
import Insurance from './src/Insurance';
import History from './src/History';
import image from './images/image';
import PayNow from './src/PayNow';
import QrCodeScanner from './src/QrCodeScanner';
import UPIPass from './src/UPIPass';



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? image.Homedf : image.Home}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#0000ff' : '#00ffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stores"
        component={Stores}
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={image.Store}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#0000ff' : '#00ffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Insurance"
        component={Insurance}
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={image.Insurance}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#0000ff' : '#00ffff',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{ headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={image.History}
              style={{
                height: 30,
                width: 30,
                tintColor: focused ? '#0000ff' : '#00ffff',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{headerShown: false}} />
        
        <Stack.Screen
          name="QrCodeScanner"
          component={QrCodeScanner}
          options={{headerShown: false}}
        />
          <Stack.Screen
          name="PayNow"
          component={PayNow}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="UPIPass"
          component={UPIPass}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App

const styles = StyleSheet.create({})
