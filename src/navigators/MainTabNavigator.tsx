import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ListenNowScreen from '../components/listenNow/ListenNow';
import SearchScreen from './../components/search/SearchScreen';
import LibraryScreen from '../components/library/LibraryScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const SearchStack = createNativeStackNavigator();

function SearchStackNavigator() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="Searchs" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

const LibraryStack = createNativeStackNavigator();

function LibraryStackNavigator() {
  return (
    <LibraryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LibraryStack.Screen name="Library Stack" component={LibraryScreen} />
    </LibraryStack.Navigator>
  );
}

const MainTab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <MainTab.Navigator
    
      screenOptions={{

        headerTitleAlign: 'center',
        headerStyle: {
          borderBottomWidth: 1,
          elevation: 10,
          backgroundColor: 'lightgray',
        },
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarLabelPosition: 'beside-icon',
      }}>
      <MainTab.Screen
        options={{
          headerTitle: 'Listen',
        }}
        name="Listen Now"
        component={ListenNowScreen}
      />
      <MainTab.Screen
        options={{
          headerTitle: 'Library',
        }}
        name="Library"
        component={LibraryStackNavigator}
      />
      <MainTab.Screen
        options={{
          headerTitle: 'Search',
        }}
        name="Search"
        component={SearchStackNavigator}
      />
      {/* <MainTab.Screen name="Settings" component={SettingsScreen} /> */}
    </MainTab.Navigator>
  );
}

export default MainTabNavigator;
