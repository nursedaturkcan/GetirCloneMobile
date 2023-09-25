import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const DetailBox = ({price,name,quantity}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}> {"\u20BA"} {price}</Text>
      <Text style={styles.name} >{name} </Text>
      <Text style={styles.mass} >{quantity} </Text>
    </View>
  )
}

export default DetailBox

