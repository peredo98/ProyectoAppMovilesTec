import React, { Component, Container } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import OnBoarding from './OnBoarding';
import Info from './Info';
import Home from './Home';
import Noticias from './Noticias';



const AppNavigator = createStackNavigator(
  {
    
    OnBoarding:{
      screen: OnBoarding,
      navigationOptions: {
        headerShown: false,
      },
    }, 
    Home: {
      screen: Home,
      navigationOptions: {
        headerShown: false,
      },
    },
    Info:Info,
    Noticias: Noticias,
  }
);

export default createAppContainer(AppNavigator);