import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Business"
        },
        {
          id: 2,
          name: "Clothing"
        },
        {
          id: 3,
          name: "Drinks"
        },
        {
          id: 4,
          name: "Education"
        },
        {
          id: 5,
          name: "Food"
        },
        {
          id: 6,
          name: "Fuel"
        },
        {
          id: 7,
          name: "Fun"
        },
        {
          id: 8,
          name: "Hospital"
        },
        {
          id: 9,
          name: "Hotel"
        },
        {
          id: 10,
          name: "Loan"
        },
        {
          id: 11,
          name: "Medical"
        },
        {
          id: 12,
          name: "Merchandise"
        },
        {
          id: 13,
          name: "Movie"
        },
        {
          id: 14,
          name: "Other"
        },
        {
          id: 15,
          name: "Personal"
        },
        {
          id: 16,
          name: "Pets"
        },
        {
          id: 17,
          name: "Restaurant"
        },
        {
          id: 18,
          name: "Salary"
        },
        {
          id: 19,
          name: "Shopping"
        },
        {
          id: 20,
          name: "Tips"
        },
        {
          id: 21,
          name: "Transport"
        }
      ]
    };
  }

  _keyExtractor = (item, index) => index.toString();

  _renderItem = item => {
    return (
      <View style={styles.viewStyle}>
        <View style={styles.boxStyle}>
          <View>
            <Text style={{ marginLeft: 10 }}>{item.item.name}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => alert("Are you sure you want to delete ! ")}
            >
              <Image
                source={require("../image/delete.png")}
                style={{
                  width: 30,
                  height: 30
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
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
          onPress={() => alert("Added successfully ! ")}
          style={styles.fab}
        >
          <Image source={require("../image/add.png")} style={img} />
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
    marginRight: 15,
    marginBottom: 10,
    marginTop: 10,
    justifyContent: "space-between"
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
