import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import AuthStackNavigator from './AuthStackNavigation'
import HomeStackNavigator from './HomeStackNavigator'

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  )
}