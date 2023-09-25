import { TouchableOpacity,Image,Text,View} from 'react-native'
import React from 'react'
import styles from "./styles"
import { useNavigation } from '@react-navigation/native'

const Category = ({name, id, subCategories, src}) => {
  const navigation=useNavigation();
  return (

<TouchableOpacity

onPress={()=>navigation.navigate("categoryDetails")}
style={styles.container}>
<Image 
style={styles.image}
source={{uri:src}}/>
<Text style={styles.text}> {name} </Text>
   </TouchableOpacity>

  )
}

export default Category