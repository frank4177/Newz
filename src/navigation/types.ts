import {
    CompositeNavigationProp,
    CompositeScreenProps,
    NavigatorScreenParams,
  } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { newsData } from "../types"


  export type AuthStackParamList = {
    Welcome: undefined
  }

 export type HomeStackParamList = {
    Home: undefined
    SearchScreen: undefined
    NewsDetailScreen?: {
      param?: newsData
    }
 
  }

  export type ProfileStackParamList = {
    Profile: undefined
  }

  export type FavouriteStackParamList = {
    Favourite: undefined
  }

  export type RootBottomTabParamList = {
    HomeStack: NavigatorScreenParams<HomeStackParamList>
    Profile: undefined
    Favourite: undefined
  }

  
  export type AppStackParamList = {
    Root: NavigatorScreenParams<RootBottomTabParamList>
    Settings: undefined
    SearchScreen:undefined
    NotificationsScreen:undefined
    NewsDetailScreen?: {
      item?: object
    }
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

  export type HomeScreenNavigationType =
  NativeStackNavigationProp<HomeStackParamList>

  export type AppStackNavigationType =
  NativeStackNavigationProp<AppStackParamList>