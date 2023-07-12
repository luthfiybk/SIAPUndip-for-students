import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Card, ListItem, Icon, Header, Slider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Background from "../../components/Background";
// import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { theme } from "../../core/theme";
import LoginScreen from "../auth/Login";
import { History } from "../index";

const DashboardAnggota = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.mainContainer}></View>

      <View style={styles.secondContainer}>
        <View style={styles.mainCardContainer}>
          <Card containerStyle={styles.cardMain}>
            <View style={styles.cardContainer}>
              <TouchableOpacity>
                <Card containerStyle={styles.cardButtons}></Card>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card containerStyle={styles.cardButtons}></Card>
              </TouchableOpacity>
            </View>
          </Card>

          <View>
            <Card containerStyle={styles.cardMain}></Card>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DashboardAnggota;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#162953",
    // flex: 1,
    marginBottom: 0,
  },
  mainContainer: {
    backgroundColor: "#162953",
    marginVertical: 30,
  },
  secondContainer: {
    marginVertical:10

  },
  mainCardContainer: {
    // flex: 1
  },
  cardContainer: {
    flexDirection: "row",
    paddingLeft: 0,
    display: "flex",
    justifyContent: "space-evenly",
  },
  cardMain: {
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 3,

    elevation: 6,
  },
  cardButtons: {
    borderRadius: 100,
    height: 50,
    width: 50,
  },
});
