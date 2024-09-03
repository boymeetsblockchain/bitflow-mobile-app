import React from 'react';
import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#FAF9F6', 
        tabBarStyle: { backgroundColor: '#E5770E' },
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
          tabBarLabel: 'Home', 
        }}
      />
    
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="wallet" size={24} color={color} />,
          tabBarLabel: 'Wallet', 
        }}
      />
      
      <Tabs.Screen
        name="compare"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="compare" size={24} color={color} />,
          tabBarLabel: 'Compare', 
        }}
      />
      
      <Tabs.Screen
        name="market"
        options={{
          tabBarIcon: ({ color }) => <SimpleLineIcons name="graph" size={24} color={color} />,
          tabBarLabel: 'Market',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
          tabBarLabel: 'Profile', 
        }}
      />
    </Tabs>
  );
}
