import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import productsGetir from '../../assets/productsGetir'
import CartItem from '../components/cartItem/CartItem'
import ProductItem from '../components/productItem/ProductItem';




const { height, width } = Dimensions.get("window");
const CartScreen = (product) => {

  return (
    <View style={{flex:1}}>
<ScrollView style={{ flex: 1 }}>
      <FlatList

        data={productsGetir.slice(0,4)}
        renderItem={({ item }) =>

          <CartItem product={item} />

        } />
        <Text
        style={styles.header}
        >Önerilen Ürünler</Text>
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        style={{backgroundColor:"white"}}
        >
          {productsGetir.map((item,index)=>(
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
     
    </ScrollView>
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>Devam Et</Text>
        </TouchableOpacity>
        <View style={styles.priceContainer}>
          <Text
            style={styles.price}
          >{"\u20BA"}24,00</Text>
        </View>
      </View>
    </View>
    





  )
}

export default CartScreen

const styles = StyleSheet.create({
  header:{
    padding:15,
    fontWeight:"bold",
    color:"#5d3ebd"
  },
  container:{
    height: height * 0.12,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "4%",
    backgroundColor: "fefefe",
    position:"absolute",
    bottom:0,
    width:"100%"
  },
  touchable:{
    height: height * 0.06,
    flex: 3,
    backgroundColor: "#5d3ebd",
    justifyContent: "center",
    alignItems: "center",
    
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  text:{
    color: "white",
    fontWeight: "bold",
    fontSize: 15
  },
priceContainer:{
  flex: 1,
  backgroundColor: "white",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -10,
  height: height * 0.06,
  borderTopRightRadius:8,
  borderBottomRightRadius:8

},
price:{

}
})