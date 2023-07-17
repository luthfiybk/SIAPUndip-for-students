import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { React, Text } from "react-native";
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { DashboardMhs,
         History
         } from "..";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const NavigatorMhs = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown:false,
            tabBarStyle:{
                position:'absolute',
                justifyContent: "center",
                backgroundColor: '#162953',
                // marginBottom:'2%',
                // marginTop:'10%',
                // marginHorizontal:'2%',
                // borderRadius:20,
                // height:80,
                // marginTop:10
                // ...styles.shadow
            },
            tabBarShowLabel:true,

        }} >
            <Tab.Screen
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center" }}>
                    <Icon
                      name={focused ? "home" : "home-outline"}
                      size={20}
                      color={focused ? "#fff" : "grey"}
                    />
                    {/* <Text
                      style={{
                        color: focused ? "#fff" : "grey",
                        // fontFamily: "Roboto-Bold",
                        fontSize: 10,
                      }}
                    >
                      Dashboard
                    </Text> */}
                  </View>
                ),
              }}
              name="Dashboard"
              component={DashboardMhs}
            />

            <Tab.Screen
              options={{

                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center" }}>
                    <Icon
                      name={focused ? "qr-code" : "qr-code-outline"}
                      size={20}
                      color={focused ? "#fff" : "grey"}
                    />
                    {/* <Text
                      style={{
                        color: focused ? "#fff" : "grey",
                        // fontFamily: "Roboto-Bold",
                        fontSize: 10,
                      }}
                    >
                      Dashboard
                    </Text> */}
                  </View>
                ),
              }}
              name="Absen"
              component={DashboardMhs}
            />

            <Tab.Screen
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={{ alignItems: "center" }}>
                    <Icon
                      name={focused ? "person-circle" : "person-circle-outline"}
                      size={20}
                      color={focused ? "#fff" : "grey"}
                    />
                    {/* <Text
                      style={{
                        color: focused ? "#fff" : "grey",
                        // fontFamily: "Roboto-Bold",
                        fontSize: 10,
                      }}
                    >
                      Dashboard
                    </Text> */}
                  </View>
                ),
              }}
              name="Profil"
              component={History}
            />

        {/* <Tab.Screen name="Absen" component={} /> */}
        </Tab.Navigator>
    );
}

export default NavigatorMhs;

const styles = StyleSheet.create({
    shadow:{
        elevation:5,
        shadowColor:'#000',
        // backgroundColor:'#00003f',
        backgroundColor: '#162953',
        borderWidth:1,
        borderColor:'transparent',
    }
})