import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './src/core/theme'
import Router from './src/router'

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  )
}
