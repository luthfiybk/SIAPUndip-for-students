import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Card, ListItem, Header, Slider } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Background from "../../components/Background";
// import Header from "../../components/Header";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { theme } from "../../core/theme";
import LoginScreen from "../auth/Login";
import { History } from "../index";
import { dummyData } from "../constant";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome"
import { CalendarProvider, WeekCalendar } from "react-native-calendars";

const DashboardMhs = () => {
  return (
    <View style={styles.bg}>
      <View style={{flexDirection: 'column', marginTop:hp('1%'), paddingHorizontal: '5%'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
          <View style={styles.mainContainer}>
            {/* Welcome Header */}
            <View style={{flexDirection: 'column'}}>
              <Text style={{fontFamily:' Roboto-Regular', fontSize: 30, color: '#fff'}}>Selamat Datang</Text>
              <Text style={{fontFamily:' Roboto-Medium', fontSize: 16, color: '#fff', marginTop:hp('1%')}}>User | 24060120140999</Text>
              <Text style={{fontFamily:' Roboto-Medium', fontSize: 16, color: '#fff', marginTop:hp('1%')}}>S1 Informatika</Text>
            </View>
            
            {/* Profile Info*/}
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop:hp('3%')}}>
              <Text style={{fontFamily:' Roboto-Regular', fontSize: 25, color: '#fff', textAlign: 'center', paddingHorizontal: '5%'}}>IPK 4.00</Text>
              <Text style={{fontFamily:' Roboto-Regular', fontSize: 25, color: '#fff', textAlign: 'center'}}>SKSK 144</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.secondContainer}>
        <View style={styles.mainCardContainer}>
          <Card containerStyle={styles.cardMain}>
            <View style={styles.cardContainer}>
              <TouchableOpacity>
                <Card containerStyle={styles.cardButtons}>
                  <Icon name='vcard-o' size={20}/>
                </Card>
                <Text style={{textAlign: 'center'}}>Riwayat Absen</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card containerStyle={styles.cardButtons}>
                  <Icon name='file-text-o' size={20} />
                </Card>
                <Text style={{textAlign: 'center'}}>KHS</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Card containerStyle={styles.cardButtons}>
                  <Icon name="envelope-open-o" size={20} />
                </Card>
                <Text style={{textAlign: 'center'}}>Pesan</Text>
              </TouchableOpacity>
              
            </View>
          </Card>

          {/* <View>
            <Card containerStyle={styles.cardMain}></Card>
          </View> */}
        </View>
      </View>

      <View>
          <CalendarProvider>
            <WeekCalendar />
          </CalendarProvider>
      </View>
    </View>
  );
};

export default DashboardMhs;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#162953",
    // flex: 1,
    marginBottom: 0,
  },
  mainContainer: {
    backgroundColor: "#162953",
    marginVertical: 20,
    flexDirection: "column"
  },
  secondContainer: {
    marginVertical: 1

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
