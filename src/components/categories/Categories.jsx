import { View, Text } from 'react-native'
import React,{useState} from 'react'
import styles from './styles'
import Category from '../category/Category'
import categoriesGetir from '../../../assets/categoriesGetir'


const Categories = () => {

    const [categories,setCategories]=useState(categoriesGetir)
  return (
    <View style={styles.wrapper}>
     <View style={styles.container}>
        {categories.map(category=>(
   <Category key={category.id} name={category.name} src={category.src} subCategories={category.subCategories} id={category.id}/>
        ))}
    
     </View>
    </View>
  )
}

export default Categories