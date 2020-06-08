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
    OnBoarding:{
      screen: OnBoarding,
      navigationOptions: {
        header: null,
      },
    }, 
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    Info:Info
  },
  {
    initialRouteParams: Home
  }
);

export default createAppContainer(AppNavigator);