import React, {useState, useEffect} from 'react';
import {Touchable, TouchableOpacity, View} from 'react-native';

//NAVIGATION
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const AppStack = ( ) => {
  
  return (
    <Stack.Navigator
      // initialRouteName="OnboardingSwiper"
      initialRouteName='Home'
      >
      <Stack.Screen name="Home" component={HomeScreen}  
      options={{
        headerTitleAlign: 'center',
        headerBackVisible: true,
      }}
      />
    </Stack.Navigator>
  );
};