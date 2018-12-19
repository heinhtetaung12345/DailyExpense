import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class Ball extends Component {
  render() {
    return (
      <View style={styles.ball}>
        <Image source={require("./image/expense.png")} style={styles.img} />
      </View>
    );
  }
}
const styles = {
  ball: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 75,
    borderColor: "powderblue",
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 100,
    height: 100
  }
};
export default Ball;
