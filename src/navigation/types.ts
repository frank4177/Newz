import {
    CompositeNavigationProp,
    CompositeScreenProps,
    NavigatorScreenParams,
  } from "@react-navigation/native"


  
export type HomeStackParamList = {
    Home: undefined
  }

  export type AuthStackParamList = {
    Welcome: undefined
  }
  

  export type RootBottomTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    Profile: undefined
    Favourite: undefined
  }

  
  export type AppStackParamList = {
    Root: NavigatorScreenParams<RootBottomTabParamList>
    Settings: undefined
  }
  
  export type RootStackParamList = {
    AppStack: NavigatorScreenParams<AppStackParamList>
    AuthStack: NavigatorScreenParams<AuthStackParamList>
  }
  
  declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }