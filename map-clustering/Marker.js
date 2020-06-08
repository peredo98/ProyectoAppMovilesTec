import React, { memo } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Marker } from "react-native-maps";
import { returnMarkerStyle } from "./helpers";

const ClusteredMarker = ({
  location,
  onPress
}) => {
  const points = location.latest.confirmed
  const { width, height, fontSize, size } = returnMarkerStyle(points);
  const clusterColor = "#9F0101"
  const clusterTextColor = "#FFFFFF"
  return (
    <Marker
      coordinate={{
        longitude: parseFloat(location.coordinates.longitude),
        latitude: parseFloat(location.coordinates.latitude)
      }}
      style={{ zIndex: points + 1 }}
      onPress={onPress}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={[styles.container, { width, height }]}
      >
        <View
          style={[
            styles.wrapper,
            {
              backgroundColor: clusterColor,
              width,
              height,
              borderRadius: width / 2
            }
          ]}
        />
        <View
          style={[
            styles.cluster,
            {
              backgroundColor: clusterColor,
              width: size,
              height: size,
              borderRadius: size / 2
            }
          ]}
        >
          <Text style={[styles.text, { color: clusterTextColor, fontSize }]}>
            {points}
          </Text>
        </View>
      </TouchableOpacity>
    </Marker>
  );
};

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

export default memo(ClusteredMarker);
