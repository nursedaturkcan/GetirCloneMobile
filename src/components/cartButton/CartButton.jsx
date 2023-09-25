import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("window");
const CartButton = () => {
  return (
    <TouchableOpacity style={{
        width:"100%",
        marginTop:40,
        height:height*0.1,
        backgroundColor:"white",
        justifyContent:"center"
    }}>
      <View style={{
        height:height*0.06,
        width:"90%",
        backgroundColor:"#5d39c1",
        marginHorizontal:"5%",
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center"
      }}>
      <Text style={{
        fontWeight:"bold",
        fontSize:15,
        color:"white"
      }}>Sepete Ekle</Text>
      </View>
    </TouchableOpacity>
  )
}

export default CartButton