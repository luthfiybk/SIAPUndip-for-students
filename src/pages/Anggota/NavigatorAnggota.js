import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { React } from "react-native";
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { DashboardAnggota,
         History
         } from "..";

const Tab = createBottomTabNavigator();

const NavigatorAnggota = () => {
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
        {/* <Icon
          name={focused ? "home" : "home-outline"}
          size={20}
          color={focused ? "#fff" : "grey"}
        /> */}
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
  component={DashboardAnggota}
/>

<Tab.Screen
  options={{
    tabBarIcon: ({ focused }) => (
      <View style={{ alignItems: "center" }}>
        {/* <Icon
          name={focused ? "home" : "home-outline"}
          size={20}
          color={focused ? "#fff" : "grey"}
        /> */}
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
  name="History"
  component={History}
/>

{/* <Tab.Screen name="Absen" component={} /> */}
</Tab.Navigator>
    );
}

export default NavigatorAnggota;

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