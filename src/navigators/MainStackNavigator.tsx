import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/listenNow/ListenNow';
import MainTabNavigator from './MainTabNavigator';
import {PodcastDetailScreen} from '../components/podcastDetails/PodcastDetailScreen';
import tw from 'tailwind-react-native-classnames';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: String(tw`text-blue-400`),
      }}>
      <MainStack.Screen name="Home" component={MainTabNavigator} />
      <MainStack.Screen
        options={{
          headerShown: true,
          title: '',
        }}
        name="PodcastDetails"
        component={PodcastDetailScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
