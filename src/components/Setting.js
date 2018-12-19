import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Share,
  Modal,
  TouchableHighlight,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

class Setting extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    const {
      containerStyle,
      viewStyle,
      textStyle,
      boxStyle,
      textStyle2,
      buttonStyle
    } = styles;
    return (
      <View style={containerStyle}>
        <ScrollView>
          <View>
            <TouchableOpacity
              style={viewStyle}
              onPress={() => Actions.currency()}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Currency</Text>
                <Text style={textStyle2}>Indian Rupee</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={viewStyle}
              onPress={() => Actions.password()}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Password</Text>
                <Text style={textStyle2}>Add Password</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => Alert.alert("Modal has been closed.")}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 200,
                    height: 300,
                    backgroundColor: "white",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={buttonStyle}
                  >
                    <Text>Hide Page</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={viewStyle}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Date Format</Text>
                <Text style={textStyle2}>dd-MM-yyy</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => Alert.alert("Modal has been closed.")}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <View
                  style={{
                    width: 200,
                    height: 300,
                    backgroundColor: "white",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible);
                    }}
                    style={buttonStyle}
                  >
                    <Text>Hide Page</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}
              style={viewStyle}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Time Format</Text>
                <Text style={textStyle2}>hh:mm:aa</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View>
            <TouchableOpacity
              style={viewStyle}
              onPress={() => Actions.category()}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Category</Text>
                <Text style={textStyle2}>Add Categories</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={viewStyle}
              onPress={() => Actions.payment()}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Payment Mode</Text>
                <Text style={textStyle2}>Add Payment Mode</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={viewStyle}
              onPress={() => Actions.database()}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Database</Text>
                <Text style={textStyle2}>Import , Export , Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={viewStyle}
              onPress={() => Actions.suggestion()}
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Suggestion</Text>
                <Text style={textStyle2}>Send Suggestion</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={viewStyle}
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
                    dialogTitle: "Send mail "
                  }
                )
              }
            >
              <View style={boxStyle}>
                <Text style={textStyle}>Contact Us</Text>
                <Text style={textStyle2}>heinhtetaungcu@gmail.com</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={viewStyle}>
              <View style={boxStyle}>
                <Text style={textStyle}>App Version</Text>
                <Text style={textStyle2}>Version 1.0</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: "column"
  },
  boxStyle: {
    flexDirection: "column"
  },
  textStyle: {
    fontSize: 17,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10
  },
  textStyle2: {
    marginLeft: 10
  },
  viewStyle: {
    borderWidth: 0.5
  },
  buttonStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    position: "relative",
    backgroundColor: "powderblue"
  }
};

export default Setting;
