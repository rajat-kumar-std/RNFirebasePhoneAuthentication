import React from 'react';
// import { Button, View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import MobileInputScreen from './src/screens/MobileInputScreen';
import OtpInputScreen from './src/screens/OtpInputScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Authentication">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Authentication" component={MobileInputScreen} />
        <Stack.Screen name="Verification" component={OtpInputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
