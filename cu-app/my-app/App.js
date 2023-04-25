import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './source/Huudas/Home';
const stack = createNativeStackNavigator();
export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
        name='Home'
        component={HomeScreen}
        options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};