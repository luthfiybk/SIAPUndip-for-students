import {React, StatusBar, View, Text, Pressable } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from "react-native-vector-icons/Ionicons"

const Absensi = ({navigation}) => {
    return (
        <View style={{flex: 1, backgroundColor: "#fff"}}>
            <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
            <LinearGradient start={{ x: 0.0, y: 0.4 }} end={{ x: 0.5, y: 1.0 }} locations={[0, 1]} colors={["#162953", "#162953"]} style={{ flex: 1.2, flexDirection: "column" }}>
                <View style={{ flexDirection: "column", paddingHorizontal: "3%" }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <View style={{ flexDirection: "row", alignItems: "center", marginTop: hp("1%") }}>
                            <Icon name="chevron-back-sharp" size={25} color="#fff" />
                            <Text style={{ fontSize: 20, color: "#fff" }}>
                                Back
                            </Text>

                        </View>
                    </Pressable>
                </View>
            </LinearGradient>
            <View style={{ flex: 1, backgroundColor: "#fff" }}>

            </View>
        </View>
    )
}

export default Absensi