import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import Input from "../common/Input";
import Button from "../common/Button";

class Password extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: "column" }}>
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Button>Save</Button>
        </View>
      </ScrollView>
    );
  }
}
export default Password;
