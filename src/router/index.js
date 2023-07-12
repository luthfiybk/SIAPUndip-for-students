import React from 'react'
import { Login,
         DashboardAnggota,
         NavigatorAnggota } from '../pages'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaView, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const Stack = createStackNavigator();

const Router = () => {
  return (
    <>
      <StatusBar
        backgroundColor="#ffffff" // Set the desired background color
        style='light' // Set the content color (either 'dark-content' or 'light-content')
      />
      <View style={{ flex: 1, backgroundColor: '#162953' }}>
        <SafeAreaView style={{ flex: 0, backgroundColor: '#162953' }} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {/* <Stack.Screen name='Login' component={Login} /> */}
          {/* <Stack.Screen name='DashboardAnggota' component={DashboardAnggota} /> */}
          <Stack.Screen name='NavigatorAnggota' component={NavigatorAnggota} />
        </Stack.Navigator>
      </View>
    </>
  );
};

export default Router;

// export default Router