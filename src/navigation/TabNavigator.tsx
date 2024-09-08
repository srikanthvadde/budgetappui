// src/navigation/TabNavigator.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AccountScreen from '../screens/AccountScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import ReportsScreen from '../screens/ReportsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { useColorScheme } from '../hooks/useColorScheme';
import { Colors } from '../constants/Colors';

const Tab = createMaterialTopTabNavigator();

const TabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: Colors[colorScheme ?? 'light'].background },
        tabBarIndicatorStyle: { backgroundColor: Colors[colorScheme ?? 'light'].tint },
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 14 },
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].inactiveTint,
      }}
    >
      <Tab.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
      <Tab.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} />
      <Tab.Screen name="Transactions" component={TransactionsScreen} options={{ title: 'Transactions' }} />
      <Tab.Screen name="Reports" component={ReportsScreen} options={{ title: 'Reports' }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
