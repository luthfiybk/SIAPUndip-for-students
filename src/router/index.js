import React from 'react'
import { Login } from '../pages'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default Router