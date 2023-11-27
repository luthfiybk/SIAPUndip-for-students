import { Pressable, React, StatusBar } from "react-native";
import { TouchableOpacity, StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";
import { dummyData } from "../../constant";

const Profile = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1.2, flexDirection: "column" }}>
        <View style={{ flexDirection: "column", marginTop: hp("3%"), paddingHorizontal: "5%" }}>
          <Text style={{ fontSize: 28, color: "#fff" }}>Profil</Text>
        </View>
      </LinearGradient>

      <View style={{ flex: 8, backgroundColor: "#fff" }}>
        <View style={{ flexDirection: "row", backgroundColor: "#fff", height: hp("13%"), width: "100%", alignItems: "center", justifyContent: "space-evenly", borderTopStartRadius: 20, borderTopEndRadius: 20, marginTop: -32 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", display: "flex", flex: 1, maxWidth: "100%", paddingHorizontal: "5%", marginTop: hp("2%") }}>

            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontFamily: " Roboto-Medium", fontSize: 20, color: "#000", marginTop: hp("1%") }}>{dummyData.nama_mhs}</Text>
              <Text style={{ fontFamily: " Roboto-Medium", color: "#000", marginTop: hp("1%") }}>
                {dummyData.nim_mhs} | {dummyData.prodi}
              </Text>
              <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", display: "flex", width: "30%", marginTop: hp("1%"), borderRadius: 10, backgroundColor: "#fafbfc" }}>
                <Pressable onPress={() => navigation.navigate("Login")}>
                  <Text style={{ fontSize: 18, color: "red", textAlign: "center" }}>Logout</Text>
                </Pressable>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "column" }}>
              <Image source={require("../../../assets/img/avatar.png")} resizeMode="cover" style={{ width: 50, height: 50, borderRadius: 20, marginLeft: 15 }} />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "#fff", height: hp("13%"), marginTop: hp("1%"), width: "100%", alignItems: "flex-start", shadowColor: "#000", justifyContent: "space-evenly", paddingHorizontal: "2%" }}>
          <View style={{ borderWidth: 1, width: "45%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, borderColor: "#fafbfc" }}>
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 25 }}>{dummyData.ipk}</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey" }}>IP Kumulatif</Text>
          </View>
          <View style={{ borderWidth: 1, width: "45%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, borderColor: "#fafbfc" }}>
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 25 }}>{dummyData.sksk}</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey" }}>SKS Kumulatif</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", backgroundColor: "#fff", height: hp("13%"), marginTop: hp("1%"), width: "100%", alignItems: "flex-start", shadowColor: "#000", justifyContent: "space-evenly", paddingHorizontal: "2%" }}>
          <View style={{ borderWidth: 1, width: "45%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, borderColor: "#fafbfc" }}>
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 25 }}>4.00</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey" }}>IP Kumulatif</Text>
          </View>
          <View style={{ borderWidth: 1, width: "45%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, borderColor: "#fafbfc" }}>
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 25 }}>{dummyData.semester}</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey" }}>Staus: {dummyData.status}</Text>
          </View>
        </View>
        {/* <View style={{ flexDirection: "row", backgroundColor: "#fff", height: hp("13%"), marginTop: hp("1%"), width: "100%", alignItems: "flex-start", shadowColor: "#000", justifyContent: "space-evenly", paddingHorizontal: "2%" }}>
          <View style={{ borderWidth: 1, width: "93%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, borderColor: "#fafbfc" }}>
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 25 }}>{dummyData.kehadiran}</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey" }}>Rata - rata Kehadiran</Text>
          </View>
        </View> */}
        <View style={{ flexDirection: "row", backgroundColor: "#fff", height: hp("13%"), marginTop: hp("1%"), width: "100%", alignItems: "flex-start", shadowColor: "#000", justifyContent: "space-evenly", paddingHorizontal: "2%" }}>
          <View style={{ borderWidth: 1, width: "93%", height: hp("13%"), paddingHorizontal: "5%", justifyContent: "space-evenly", borderRadius: 10, borderWidth: 1, borderColor: "#fafbfc" }}>
            <Text style={{ fontFamily: "Roboto-Bold", fontSize: 20 }}>{dummyData.dosen_wali}</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey" }}>NIP: {dummyData.nip_dosen_wali}</Text>
            <Text style={{ fontFamily: "Robot-Medium", fontSize: 15, color: "grey", textAlign: "right"}}>Dosen Wali</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
