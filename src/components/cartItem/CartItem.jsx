import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
const CartItem = ({ product }) => {
    return (
      

     
        <View style={styles.container}>
            <View style={styles.leftSide}>
                <Image style={styles.image} source={{ uri: product.image }} />
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <Text style={styles.mass}>{product.miktar}</Text>
                    <Text style={styles.price}>{"\u20BA"}{product.fiyat}</Text>
                </View>
            </View>
            <View style={styles.rightSide} >
               <TouchableOpacity style={styles.touchable}>
                <Text>-</Text>
               </TouchableOpacity>
               <View style={[styles.touchable,styles.centerQuantitiy]} >
                <Text style={styles.centerQuantitiyText}>2</Text>
               </View>
               <TouchableOpacity style={styles.touchable} >
               <Text>+</Text>
               </TouchableOpacity>
            </View>
        </View>
       
    )
}

export default CartItem
