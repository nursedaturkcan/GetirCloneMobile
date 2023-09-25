import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import BottomTabsNavigator from './src/navigations/BottomTabsNavigator'


const App = () => {
  return (
 
      <NavigationContainer>

        <BottomTabsNavigator />

      </NavigationContainer>



  )
}

export default App