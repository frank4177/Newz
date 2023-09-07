import WelcomeScreen from '../screens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppStackParamList, AuthStackParamList} from './types';
import BottomTabNavigator from './BottomTabsNavigator';
import SearchScreen from '../screens/SearchScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import NotificationsScreen from '../screens/NotificationsScreen';

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
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="NewsDetailScreen"
        component={NewsDetailScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
