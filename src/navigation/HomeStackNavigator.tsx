import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from './types';
import SearchScreen from '../screens/SearchScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
