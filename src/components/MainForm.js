import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Share,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { Actions } from "react-native-router-flux";
import Header from "./common/Header";
import Ball from "./Ball";

export default class MainForm extends Component {
  render() {
    const { containerStyle, firstView, secondView, img } = styles;
    return (
      <View style={containerStyle}>
        <View style={firstView}>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10
            }}
          >
            <Ball />
            <Text>Current Month Chart </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 10
            }}
          >
            <Text style={{ color: "green" }}>Income</Text>
            <Text style={{ color: "red" }}>Expenses</Text>
            <Text style={{ color: "gray" }}>Balance</Text>
          </View>
        </View>

        <View style={secondView}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                backgroundColor: "powderblue"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8
                }}
                onPress={() => Actions.income()}
              >
                <Image source={require("./image/income.png")} style={img} />
                <Text>Add Income</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                backgroundColor: "powderblue"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8
                }}
                onPress={() => Actions.expense()}
              >
                <Image source={require("./image/expense.png")} style={img} />
                <Text>Add Expenses</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                backgroundColor: "powderblue"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8
                }}
                onPress={() => Actions.transaction()}
              >
                <Image
                  source={require("./image/transaction.png")}
                  style={img}
                />
                <Text>All Transaction </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                backgroundColor: "powderblue"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8
                }}
                onPress={() => Actions.report()}
              >
                <Image source={require("./image/report.png")} style={img} />
                <Text>Reports</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                backgroundColor: "powderblue"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8
                }}
                onPress={() => Actions.setting()}
              >
                <Image source={require("./image/setting.png")} style={img} />
                <Text>Setting</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                borderWidth: 0.4,
                backgroundColor: "powderblue"
              }}
            >
              <TouchableOpacity
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 8
                }}
                onPress={() =>
                  Share.share(
                    {
                      message:
                        "BAM: we're helping your business with awesome React Native apps",
                      url: "http://bam.tech",
                      title: "Wow, did you see that?"
                    },
                    {
                      // Android only:
                      dialogTitle: "Choose One "
                    }
                  )
                }
              >
                <Image source={require("./image/share.png")} style={img} />
                <Text>Share</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ height: 40 }} />
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
    flex: 1,
    flexDirection: "column"
  },
  img: {
    width: 60,
    height: 60
  }
};
