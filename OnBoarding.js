
import 'react-native-gesture-handler';

import firebase from 'react-native-firebase';

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  getTheme,
  Textfield,
  MKColor,
  Button,
} from 'react-native-material-kit';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { StackActions, NavigationActions } from 'react-navigation';

import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: null,
  enableCache: true,
  sync: {
  }
});

const styles = {
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  textfield: {
    height: 60, // have to do it on iOS
    marginTop: 100,
    marginRight: 50,
    marginLeft: 50,
  },
  passwordTextfield: {
    height: 60, // have to do it on iOS
    marginTop: 30,
    marginRight: 50,
    marginLeft: 50,
  },
  button: {
    height: 60, // have to do it on iOS
    marginTop: 30,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 7,
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center', // this will prevent TFs from stretching horizontal
    marginLeft: 7,
    marginRight: 7,
    // backgroundColor: MKColor.Lime,
  },
};

export default class OnBoarding extends Component{
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      response: ''
    }
  }

  componentDidMount(){
    this.loadAutoLogin();
  }

  async signUp(){
    try{
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: 'account created!'
      })
      this.saveAutoLogin();
      this.props.navigation.dispatch(
        StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
        })
      )
    }catch(error){
      this.setState({
        response: error.toString()
      })
      alert(this.state.response);
    }
  }


  async  login(){
    try{
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: 'user logged in'
      })
      this.saveAutoLogin();
      this.props.navigation.dispatch(
        StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
        })
      )
    }catch(error){
      this.setState({
        response: error.toString()
      })
      alert(this.state.response);
    }
  }

  render(){
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.row}>
              <View style={styles.col}>
                <Textfield
                  floatingLabelEnabled={true}
                  placeholder="Email"
                  style={styles.textfield}
                  textInputStyle={{
                    flex: 1,
                  }}
                  onChangeText ={(email) => this.setState({email})}
                />
                <Textfield
                  floatingLabelEnabled={true}
                  password={true}
                  placeholder="Contraseña"
                  style={styles.passwordTextfield}
                  textInputStyle={{
                    flex: 1,
                  }}
                  onChangeText ={(password) => this.setState({password})}
                />
                <Button
                backgroundColor={MKColor.Teal}
                shadowRadius={2}
                shadowOffset={{width:0, height:2}}
                shadowOpacity={.7}
                shadowColor="black"
                style={styles.button}
                onPress={async () => {
                  this.signUp();
                }}
                >
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text pointerEvents="none"
                          style={{color: 'white', fontWeight: 'bold', textAlign: "center", fontSize: 20}}>
                      Registrarse
                    </Text>
                  </View>
                </Button>
                
                <Button
                backgroundColor={MKColor.Teal}
                shadowRadius={2}
                shadowOffset={{width:0, height:2}}
                shadowOpacity={.7}
                shadowColor="black"
                style={styles.button}
                onPress={async () => {
                  this.login();
                }}
                >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <Text pointerEvents="none"
                        style={{color: 'white', fontWeight: 'bold', textAlign: "center", fontSize: 20}}>
                    Iniciar sesión
                  </Text>
                </View>
              </Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };

  

  saveAutoLogin(){
    storage.save({
      key: 'loginState', // Note: Do not use underscore("_") in key!
      data: {
        loginState: true 
      },
    
      // if expires not specified, the defaultExpires will be applied instead.
      // if set to null, then it will never expire.
      expires: null
    });
  }

  loadAutoLogin(){
    // load
  storage
  .load({
    key: 'loginState',

    // autoSync (default: true) means if data is not found or has expired,
    // then invoke the corresponding sync method
    autoSync: true,

    // syncInBackground (default: true) means if data expired,
    // return the outdated data first while invoking the sync method.
    // If syncInBackground is set to false, and there is expired data,
    // it will wait for the new data and return only after the sync completed.
    // (This, of course, is slower)
    syncInBackground: true,

    // you can pass extra params to the sync method
    // see sync example below
    syncParams: {
      extraFetchOptions: {
        // blahblah
      },
      someFlag: true
    }})
    .then(ret => {
      // found data go to then()
      console.log(ret.loginState);
      if(ret.loginState){
        this.props.navigation.dispatch(
          StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })]
          })
        )
      }
    })
    .catch(err => {
      // any exception including data not found
      // goes to catch()
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          // TODO;
          break;
        case 'ExpiredError':
          // TODO
          break;
      }
    });
  }
}

  