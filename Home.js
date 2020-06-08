import React, {Component} from 'react';
import MapView, { Callout } from "react-native-maps";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import  ClusteredMarker from "./map-clustering/Marker";

import {
  getTheme,
  Textfield,
  MKColor,
  Button,
} from 'react-native-material-kit';

import Icon from 'react-native-vector-icons/FontAwesome';



const INITIAL_REGION = {
  latitude: 40,
  longitude: 0,
  latitudeDelta: 90,
  longitudeDelta: 180
};

export default class Home extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    ////////////////////////////////////////////[ GET INFO FROM DB ]////////////////////////////////////////////////////
    
    fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations', {
      method: 'get',
    })
      .then(response => response.json())
      .then(responseJson => {
        
        this.setState({data: responseJson.locations});
      })
      .catch(error => console.log("no hay conexion")); //to catch the errors if any
    ////////////////////////////////////////////////////////////////////////////////////////////////
  
  }

  async showInfo(location){
    this.props.navigation.push('Info', location);
  }

  render() {
    
    const points = 20;
    return (
      <View style={styles.container}>

      <MapView initialRegion={INITIAL_REGION} minZoom={-1} style={{ flex: 1 }}>
        {
          this.state.data.map((location) => {
            if(location.latest.confirmed > 0){
              return (<ClusteredMarker location={location} onPress={() => this.showInfo(location)}/>);
            }
          })
        }
        
      </MapView>

      <Callout style={styles.buttonCallout}>
          <TouchableOpacity
            style={[styles.touchable]}
            onPress={() => this.props.navigation.push('Noticias')}
          >
            <Icon
              name="newspaper-o"
              size={60} color="#fff"
            />
          </TouchableOpacity>
        </Callout>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonCallout: {
    position: 'absolute',
    bottom:0,
    flex: 1,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderRadius: 20,
    marginBottom: 36
  },
  touchable: {
    backgroundColor: "#008080",
    borderRadius: 20,
    height: 80,
    padding: 10,
    margin: 10
  },
  touchableText: {
    fontSize: 24
  },
  searchCallout: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    width: "80%",
    marginLeft: "5%",
    marginTop: 40
  },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0
  }
});