import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryFiltering from '../components/caategoryList/CategoryFiltering'
import TypeFiltering from '../components/typeFiltering/TypeFiltering'

import ProductsContainer from '../components/productsContainer/ProductsContainer'

const CategoryFilterScreen = ({category}) => {
  
  return (
    <ScrollView>
<CategoryFiltering />
<TypeFiltering/>
<ProductsContainer/>
    </ScrollView>
   
  )
}

export default CategoryFilterScreen