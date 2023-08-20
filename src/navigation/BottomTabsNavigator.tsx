import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootBottomTabParamList} from './types';
import HomeStackNavigator from './HomeStackNavigator';
import {Text} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import {
  HomeIcon,
  HeartIcon,
  FaceSmileIcon,
} from 'react-native-heroicons/outline';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator<RootBottomTabParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 60,
          position: 'absolute',
          bottom: 20,
          borderRadius: 90,
          marginHorizontal: 25,
        },
        tabBarLabelStyle: { fontSize: 13},
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={() => ({
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/house.png')}
              style={{tintColor: focused ? '#FF3A44' : 'gray', width:35, height:35}}
            />
          ),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          title: 'Profile',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/heart.png')}
              style={{tintColor: focused ? '#FF3A44' : 'gray', width:35, height:35}}
            />
          ),
          headerShown: false,
        })}
      />

      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={() => ({
          title: 'Favourite',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/smile.png')}
              style={{tintColor: focused ? '#FF3A44' : 'gray', width:33, height:32}}
            />
          ),
          headerShown: false,
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
