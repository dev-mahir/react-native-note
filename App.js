import React from 'react'
import { View, Text } from 'react-native'
import Scroll from './android/components/Scroll';
import Flat from './android/components/FlatList/Flat';

const App = () => {
  return (
    <View>
      {/* <Scroll/> */}
      <Flat/>
    </View>
  )
}

export default App;