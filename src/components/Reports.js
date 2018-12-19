import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

class Report extends Component {
  render() {
    const {
      containerStyle,
      firstView,
      secondView,
      ball1,
      ball2,
      img,
      insideBall
    } = styles;
    return (
      <View style={containerStyle}>
        <View style={firstView}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 80
            }}
          >
            <View>
              <View style={ball1}>
                <View style={insideBall} />
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20
            }}
          >
            <Text style={{ color: "green" }}>Income</Text>
            <Text style={{ color: "red" }}>Expenses</Text>
            <Text style={{ color: "gray" }}>Balance</Text>
          </View>
        </View>

        <View style={secondView}>
          <View>
            <TouchableOpacity>
              <View style={ball2}>
                <Image source={require("./image/add.png")} style={img} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1
  },
  firstView: {
    flex: 1,
    flexDirection: "column"
  },
  secondView: {
    height: 40,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  ball1: {
    height: 250,
    width: 250,
    borderRadius: 125,
    borderWidth: 125,
    borderColor: "gray",
    justifyContent: "center",
    alignItems: "center"
  },
  insideBall: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 75,
    borderColor: "powderblue",
    alignItems: "center"
  },
  ball2: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "powderblue",
    marginBottom: 30,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: 30,
    height: 30
  }
};
export default Report;
