import React, {Component} from 'react';
import MapView, {} from "react-native-maps";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import  ClusteredMarker from "./map-clustering/Marker";

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
      <MapView initialRegion={INITIAL_REGION} minZoom={-1} style={{ flex: 1 }}>
        {
          this.state.data.map((location) => {
            if(location.latest.confirmed > 0){
              return (<ClusteredMarker location={location} onPress={() => this.showInfo(location)}/>);
            }
          })
        }
        
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  wrapper: {
    position: "absolute",
    opacity: 0.5,
    zIndex: 0
  },
  cluster: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1
  },
  text: {
    fontWeight: "bold"
  }
});
