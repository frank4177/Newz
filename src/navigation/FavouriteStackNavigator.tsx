import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeStackParamList} from './types';
import FavouriteScreen from '../screens/FavouriteScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={FavouriteScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
