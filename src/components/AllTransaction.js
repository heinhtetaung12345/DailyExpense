import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class AllTransaction extends Component {
  render() {
    const { containerStyle, textStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={textStyle}>No Transaction Found </Text>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default AllTransaction;
