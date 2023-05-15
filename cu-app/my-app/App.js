import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/Huudas/Home';
import BaraaScreen from './source/Huudas/baraa'
const stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown:false}}/>
        <stack.Screen
        name='Baraa'
        component={BaraaScreen}
        options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};