import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import RadioButton from "react-native-radio-button";

export default class Currency extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "European Euro"
        },
        {
          id: 2,
          name: "European Euro"
        },
        {
          id: 3,
          name: "albanian Lek"
        },
        {
          id: 4,
          name: "Algerian Dinar"
        },
        {
          id: 5,
          name: "European Euro"
        },
        {
          id: 6,
          name: "Angolan Kwanza"
        },
        {
          id: 7,
          name: "East Caribbean Dollar"
        },
        {
          id: 8,
          name: "East Caribbean Dollar"
        },
        {
          id: 9,
          name: "Argentine Peso"
        },
        {
          id: 10,
          name: "Armenian Dram"
        },
        {
          id: 11,
          name: "Aruban Florin"
        },
        {
          id: 12,
          name: "Myanmar"
        }
      ]
    };
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = item => {
    return (
      <View>
        <TouchableOpacity style={styles.viewStyle}>
          <View style={styles.boxStyle}>
            <RadioButton />
            <Text style={{ marginLeft: 10 }}>{item.item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    const { container, img } = styles;
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <TouchableOpacity
          onPress={() => alert("Country save successfully ! ")}
          style={styles.fab}
        >
          <Image source={require("../image/transaction.png")} style={img} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: "column"
  },
  valueText: {
    fontSize: 18
  },
  viewStyle: {
    borderWidth: 0.5
  },
  boxStyle: {
    flexDirection: "row",
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10
  },
  fab: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: "#03A9F4",
    borderRadius: 30,
    elevation: 8
  },
  img: {
    width: 30,
    height: 30
  }
};
