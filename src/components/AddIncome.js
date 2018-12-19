import React, { Component } from "react";
import {
  View,
  Text,
  Picker,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import CardSection from "./common/CardSection";
import Input from "./common/Input";
import Card from "./common/Card";
import Button from "./common/Button";

class AddIncome extends Component {
  render() {
    const {
      containerStyle,
      pickerTextStyle,
      img,
      boxStyle,
      descriptionStyle
    } = styles;
    return (
      <View style={containerStyle}>
        <ScrollView>
          <Input placeholder="Amount" onChangeText={() => null} />

          <View style={pickerTextStyle}>
            <Picker onValueChange={() => null}>
              <Picker.Item label="Business" value="Monday" />
              <Picker.Item label="Loan" value="Tuesday" />
              <Picker.Item label="Salary" value="Salary" />
            </Picker>
          </View>
          <View style={boxStyle}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => console.log("Clicked Date")}
            >
              <Image source={require("./image/calendar.png")} style={img} />
              <Text style={{ marginLeft: 5 }}>17-12-2018</Text>
            </TouchableOpacity>
          </View>
          <View style={boxStyle}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => console.log("Clicked Time")}
            >
              <Image source={require("./image/clock.png")} style={img} />
              <Text style={{ marginLeft: 5 }}>01:18 pm</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={descriptionStyle}
            placeholder="Description (Optional)"
            multiline={true}
          />
          <View style={pickerTextStyle}>
            <Picker onValueChange={() => null}>
              <Picker.Item label="Cash" value="Cash" />
              <Picker.Item label="Credit Card" value="Credit Card" />
              <Picker.Item label="Debit Card" value="Debit Card" />
              <Picker.Item label="Net Banking" value="Net Banking" />
            </Picker>
          </View>
          <Button onPress={() => null}>Save</Button>
          <View style={{ height: 40 }} />
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
  pickerTextStyle: {
    fontSize: 17,
    marginTop: 5,
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1
  },
  boxStyle: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1
  },
  img: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
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
    height: 120
  }
};
export default AddIncome;
