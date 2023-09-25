import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';



const ProductItem = ({ item }) => {
const navigation=useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductsDetails", { product: item })}
      style={styles.container}
    >
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <View style={styles.textContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.discount}>{"\u20BA"}{item.fiyat}</Text>
          <Text style={styles.price}>{"\u20BA"}{item.fiyatIndirimli}</Text>
        </View>

        <Text style={styles.description}>{item.name}</Text>
        <Text style={styles.mass}>{item.miktar}</Text>
      </View>

      <TouchableOpacity
       
    
        style={styles.plus}
      >
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}


export default ProductItem;
