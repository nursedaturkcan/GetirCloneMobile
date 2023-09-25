import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import ProductItem from '../productItem/ProductItem'
import productsGetir from '../../../assets/productsGetir'

const ProductsContainer = () => {
  return (
    <View style={styles.mainContainer}> 
     <View style={styles.topContainer}>
        {productsGetir.slice(0,2).map((item)=>(
 <ProductItem key={item.id} item={item}/>
        ))}
     
     </View>
     <Text style={styles.heading}>Çubuk</Text>
     <View style={styles.bottomContainer}>
        {productsGetir.slice(2).map((item)=>(
            <ProductItem key={item.id} item={item} />
        ))}
     </View>
    </View>
  )
}

export default ProductsContainer