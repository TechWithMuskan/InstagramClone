import React from 'react';
import { StatusBar } from 'react-native';
import BottomTab from './src/navigation/BottomTab'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor='black' />
      <BottomTab />
    </>
  )
}

export default App;