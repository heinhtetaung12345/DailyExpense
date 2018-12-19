import React, { Component } from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import Input from "../common/Input";
import Button from "../common/Button";

class Suggestion extends Component {
  render() {
    const { descriptionStyle } = styles;
    return (
      <View>
        <ScrollView>
          <View style={{ flexDirection: "column" }}>
            <Input placeholder="Name" />
            <Input placeholder="Email Id" />
            <Input placeholder="Mobile No" />
            <TextInput
              style={descriptionStyle}
              placeholder="Description (Optional)"
              multiline={true}
            />
            <Button>Save</Button>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = {
  descriptionStyle: {
    fontSize: 17,
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    height: 150
  }
};
export default Suggestion;
