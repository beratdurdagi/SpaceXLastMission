import {SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import { FlashList } from '@shopify/flash-list'
import MissionList from './Components/MissionList'

const HomeScreen = () => {
  return (
    <SafeAreaView>
     <MissionList/>
    </SafeAreaView>
  )
}

export default HomeScreen

