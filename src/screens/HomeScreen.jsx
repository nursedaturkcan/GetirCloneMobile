import {ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'


import Categories from '../components/categories/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
   
 <ScrollView stickyHeaderIndices={[0]}>
      <Header/>
      <Banner/>
      <Categories/>
     
    </ScrollView>
   
   
  )
}

export default HomeScreen