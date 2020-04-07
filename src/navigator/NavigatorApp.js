import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import MainScreen from '../screens/main/Main'

const Stack = createStackNavigator()

const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Main' screenOptions={{
          headerTintColor: '#8B81FC',
          headerStyle: {
            backgroundColor: '#362f50'
          }
        }}
      >
        <Stack.Screen name='Main' component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default NavigationApp
