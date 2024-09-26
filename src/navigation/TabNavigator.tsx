// src/navigation/TabNavigator.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AccountScreen from '../screens/AccountScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import ReportsScreen from '../screens/ReportsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';
import TransactionsStackNavigator from './TransactionStackNavigator';

const Tab = createMaterialTopTabNavigator();

const TabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#006D5B',
          overflow: "scroll", // Ensures scrolling is enabled
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].tint,
        },
        tabBarLabelStyle: { fontWeight: "bold", fontSize: 14 },
        tabBarActiveTintColor:'#fbfcfc',
        tabBarInactiveTintColor: '#fbfcfc',
        tabBarScrollEnabled: true, // Enable horizontal scrolling
      }}
    >
       <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ title: "Dashboard" }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ title: "Account" }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsStackNavigator}
        options={{ title: "Transactions" }}
      />
      <Tab.Screen
        name="Reports"
        component={ReportsScreen}
        options={{ title: "Reports" }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
