// src/navigation/RootNavigator.tsx
import React from 'react';
import StackNavigator from './TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
       <TabNavigator/>
    </NavigationContainer>
  );
};

export default RootNavigator;
