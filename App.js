import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home"
import Result from "./Result"

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
    </NavigationContainer>
    
  );

}


