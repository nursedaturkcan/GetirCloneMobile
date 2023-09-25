import { View, Text, ScrollView, Dimensions, TouchableOpacity,  } from 'react-native'
import React,{useState} from 'react'

const { height } = Dimensions.get("window")

const TypeBox = ({ item, active, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 6,
          height: height * 0.044,
          marginRight: 12,
          marginTop:10
        },
        item === active ? { backgroundColor: '#5C3EBC' } : {},
      ]}
      onPress={() => onPress(item)}
    >
      <Text style={{
        fontSize: 12,
        fontWeight: '600',
        color: item === active ? 'white' : '#7849F7', 
      }}>{item}</Text>
    </TouchableOpacity>
  );
}

const TypeFiltering = () => {
  const [active, setActive] = useState("Birlikte İyi Gider"); 

  const handleTypePress = (item) => {
    setActive(item);
  };

  return (
    <ScrollView
      style={{
        width: "100%",
        height: height * 0.07,
        borderBottomWidth:1,
        borderBottomColor:"lightgrey"
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte İyi Gider", "Çubuk", "Kutu", "Külah", "Çoklu", "Bar"].map((item) => (
        <TypeBox
          key={item}
          item={item}
          active={active}
          onPress={handleTypePress}
        />
      ))}
    </ScrollView>
  )
}

export default TypeFiltering
