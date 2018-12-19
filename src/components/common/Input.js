import React from "react";
import { TextInput, View, Text } from "react-native";

const Input = props => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <TextInput
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      autoCorrect={false}
      style={inputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

const styles = {
  inputStyle: {
    fontSize: 17,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    position: "relative"
  }
};

export default Input;
