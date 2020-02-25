import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from './OnBoarding';
import Login from './Login';
import Home from './Home';


const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Registro" component={OnBoarding} />
        <Stack.Screen name="Iniciar sesión" component={Login} />
        <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;