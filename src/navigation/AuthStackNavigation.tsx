import WelcomeScreen from '../screens/WelcomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackParamList} from './types';
import BottomTabNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        options={{
          headerShown: false,
        }}
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
}
