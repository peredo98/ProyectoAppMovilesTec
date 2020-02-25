
import 'react-native-gesture-handler';
import React from 'react';
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

function Login({navigation}) {

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
                    placeholder="Usuario"
                    style={styles.textfield}
                    textInputStyle={{
                      flex: 1,
                    }}
                  />
                  <Textfield
                    floatingLabelEnabled={false}
                    password={true}
                    placeholder="Contraseña"
                    style={styles.passwordTextfield}
                    textInputStyle={{
                      flex: 1,
                    }}
                  />
                  <Button
                  backgroundColor={MKColor.Teal}
                  shadowRadius={2}
                  shadowOffset={{width:0, height:2}}
                  shadowOpacity={.7}
                  shadowColor="black"
                  style={styles.button}
                  onPress={() => {
                    navigation.push('Home');
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
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  };
  
  const styles = StyleSheet.create({
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
  });
  
  export default Login;
  