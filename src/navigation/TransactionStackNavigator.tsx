// src/navigation/TransactionsStackNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsScreen from '../screens/TransactionsScreen';
import AddTransactionScreen from '../screens/transactions/AddTransactionScreen';

const Stack = createStackNavigator();

const TransactionsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Transactions" 
        component={TransactionsScreen} 
        options={{ title: "Transactions" }} 
      />
      <Stack.Screen 
        name="AddTransactionScreen" 
        component={AddTransactionScreen} 
        options={{ title: "Add Transaction" }} 
      />
    </Stack.Navigator>
  );
};

export default TransactionsStackNavigator;
