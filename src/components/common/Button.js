import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity
      onPress={() => alert("Save successfully")}
      style={buttonStyle}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  textStyle: {
    alignSelf: "center",
    fontSize: 17,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: "powderblue"
  }
};
export default Button;
