import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/listenNow/ListenNow';
import MainTabNavigator from './MainTabNavigator';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={MainTabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
