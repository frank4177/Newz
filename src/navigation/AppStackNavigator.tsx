import WelcomeScreen from '../screens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppStackParamList, AuthStackParamList} from './types';
import BottomTabNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        options={{
          headerShown: false,
        }}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
