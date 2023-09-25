import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Feather"
import CartButton from '../cartButton/CartButton';


const DetailProperty = () => {
    const [details,setDetails]=useState([
        "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek Bilgiler",
    ]);
    const TextComponent = ({detail,index}) => {
        return(<View style={{
            paddingVertical:12,
          //  paddingHorizontal:5,
        borderBottomWidth: index==details.length -1 ? 0 : 0.3,
        borderBottomColor: 'lightgray',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
      
        }}>
            <Text style={{color:index == 0 ? 'black' :'#687482',
            fontWeight: index===0? '400' :'500',
            fontSize:index===0? 10:13
        }}>{detail}</Text>
            {index !=0 && <Icon name="chevron-down" size={24} color="#9F9F9F" />}
        </View>)
      }
      return (
      <>
        <View style={{ paddingHorizontal: 16, paddingVertical:8 ,backgroundColor: "white", }}>
          {details.map((item,index) => (
            <TextComponent detail={item} index={index} key={index} />
          ))}
        </View>
        </>
      );
    }

export default DetailProperty