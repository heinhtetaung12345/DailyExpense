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

class Database extends Component {
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
            <TouchableOpacity style={viewStyle} onPress={() => null}>
              <View style={boxStyle}>
                <Text style={textStyle}>Import</Text>
                <Text style={textStyle2}>Import Database</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={viewStyle} onPress={() => null}>
              <View style={boxStyle}>
                <Text style={textStyle}>Export</Text>
                <Text style={textStyle2}>Export Database</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity style={viewStyle} onPress={() => null}>
              <View style={boxStyle}>
                <Text style={textStyle}>Email Database</Text>
                <Text style={textStyle2}>Email Database</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={viewStyle} onPress={() => null}>
              <View style={boxStyle}>
                <Text style={textStyle}>Delete</Text>
                <Text style={textStyle2}>Delete Database</Text>
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

export default Database;
