import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProductImageCarousel from '../components/productImageCarousel/ProductImageCarousel';
import DetailBox from '../components/detailBox/DetailBox';
import DetailProperty from '../components/detailProperty/DetailProperty';
import CartButton from '../components/cartButton/CartButton';

const ProductsDetilsScreen = (props) => {
    const [productDetail, setProductDetail] = useState();
    useEffect(() => {
        setProductDetail(props.route.params.product);
    }, []);

    console.log(productDetail);
    if(!productDetail){
        return <ActivityIndicator color={"#5d3ebd"} />
    }

    return (
        <View >

        
      <ScrollView>
      <ProductImageCarousel images={productDetail.images} />
      <DetailBox price={productDetail.fiyat} name={productDetail.name} quantity={productDetail.miktar}/>
      <Text style={{paddingHorizontal:10,paddingVertical:13,color:'#808B99',fontWeight:'600',fontSize:14}}>
        Detaylar
      </Text>
      <DetailProperty/>
   
     
   
      
      </ScrollView>
      <CartButton/>
      </View>
    );
}

export default ProductsDetilsScreen;
