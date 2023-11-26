import React from 'react';

import { View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './src/bottomTabsNavigation/HomeScreen';
import AccountScreen from './src/bottomTabsNavigation/AccountScreen';
import SettingScreen from './src/bottomTabsNavigation/SettingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createBottomTabNavigator();

function App(): JSX.Element {

  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='homeScreen'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused , color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === 'homeScreen') {
              iconName = 'home';
            } else if (rn === 'accountScreen') {
              iconName = 'man';
            } else {
              iconName = 'settings';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',          
        })}
      >
        <Tab.Screen
          name='homeScreen'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',                                  
          }}
        />

        <Tab.Screen
          name='settingScreen'
          component={SettingScreen}
          options={{
            tabBarLabel: 'Setting'
          }}
        />

        <Tab.Screen
          name='accountScreen'
          component={AccountScreen}
          options={{
            tabBarLabel: 'Account'
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


export default App;
