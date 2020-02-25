
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


const styles = {
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
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
  async signUp(){
    try{
      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: 'account created!'
      })
      setTimeout(() => {
        this.props.navigation.push('Home');
      }, 300)
    }catch(error){
      this.setState({
        response: error.toString()
      })
    }
  }

  async  login(){
    try{
      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      this.setState({
        response: 'user logged in'
      })
      setTimeout(() => {
        this.props.navigation.push('Home');
      }, 300)
    }catch(error){
      this.setState({
        response: error.toString()
      })
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
           
            <View style={styles.body}>
              <View style={styles.row}>
                <View style={styles.col}>
                  <Textfield
                    floatingLabelEnabled={false}
                    placeholder="Email"
                    style={styles.textfield}
                    textInputStyle={{
                      flex: 1,
                    }}
                    onChangeText ={(email) => this.setState({email})}
                  />
                  <Textfield
                    floatingLabelEnabled={false}
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
                <Text>{this.state.response}</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
}
  