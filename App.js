import React, { Component, Container } from 'react';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import OnBoarding from './OnBoarding';
import Info from './Info';
import Home from './Home';

class App extends Component {
  render() {return (<Container />);}
}

const AppNavigator = createStackNavigator(
  {
    OnBoarding:OnBoarding,    
    Home:Home,
    Info:Info
  },
  {
    initialRouteParams: OnBoarding
  }
);

export default createAppContainer(AppNavigator);