import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Text, Image, StatusBar, Touchable, ScrollView } from "react-native";
import { dummyData } from "../../constant";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

const DashboardMhs = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1.2, flexDirection: "column", borderBottomLeftRadius: 60, borderBottomRightRadius: 60 }}>
        <View style={{ flexDirection: "column", marginTop: hp("4%"), paddingHorizontal: "5%" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
            {/* Welcome Header */}
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontFamily: "Roboto-Medium", fontSize: 20, color: "#fff", marginTop: hp("1%") }}>{dummyData.nama_mhs}</Text>
              <Text style={{ fontFamily: "Roboto-Medium", color: "#fff", marginTop: hp("1%") }}>
                {dummyData.nim_mhs} | {dummyData.prodi}
              </Text>
            </View>

            {/* Profile Info*/}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <Icon name="bell" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require("../../../assets/img/avatar.png")} resizeMode="cover" style={{ width: 35, height: 35, borderRadius: 20, marginLeft: 15 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={{ flex: 6, backgroundColor: "#fff", paddingHorizontal: wp("5%") }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            height: hp("13%"),
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            borderRadius: 20,
            borderWidth: 1,
            borderColor: "rgba(255, 255, 255, 0.1)",
            elevation: 10,
            shadowOpacity: 1,
            shadowColor: "#000",
            shadowRadius: 5,
            marginTop: -32,
          }}
        >
          <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.navigate('Absensi')}>
            <Icon name="vcard-o" size={30} />
            <Text style={styles.menuText}>Riwayat Absen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <Icon name="file-text-o" size={30} />
            <Text style={styles.menuText}>KHS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}>
            <Icon name="envelope-open-o" size={30} />
            <Text style={styles.menuText}>Transkrip</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20, marginTop: hp("3%") }}>Jadwal</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", display: "flex", marginTop: hp("2%") }}>
            <View style={{ flexDirection: "column", alignItems: "center", display: "flex", flex: 1, maxWidth: "33%" }}>
              <Icon name="check-circle-o" size={30} />
              <Text style={{ textAlign: "center", marginTop: hp("1.5%") }}>Hadir</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", display: "flex", flex: 1, maxWidth: "33%" }}>
              <Icon name="times-circle-o" size={30} />
              <Text style={{ textAlign: "center", marginTop: hp("1.5%") }}>Tidak Hadir</Text>
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", display: "flex", flex: 1, maxWidth: "33%" }}>
              <Icon name="question-circle-o" size={30} />
              <Text style={{ textAlign: "center", marginTop: hp("1.5%") }}>Izin</Text>
            </View>
          </View>
        </View>
      </View>

      {/* <View>
          <CalendarProvider>
            <WeekCalendar />
          </CalendarProvider>
      </View> */}
    </View>
  );
};

export default DashboardMhs

const styles = StyleSheet.create({
  bg: {
    // backgroundColor: "#162953",
    flex: 1.2,
    marginBottom: 0,
  },
  mainContainer: {
    backgroundColor: "#162953",
    // marginVertical: 20,
    flexDirection: "column",
  },
  secondContainer: {
    marginVertical: 1,
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
  menuIcon: { 
    flexDirection: "column", 
    alignItems: "center", 
    display: "flex", 
    flex: 1, 
    maxWidth: "33%" 
  },
  menuText: { 
    textAlign: "center",
    marginTop: hp("1.5%") 
  }
  
});
