import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import categoriesGetir from '../../../assets/categoriesGetir'

const { height } = Dimensions.get("window");

const CategoryBox = ({ category, selected, onSelectCategory }) => {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "center",
        paddingHorizontal: 9,
        borderBottomWidth: selected ? 2.5 : 0, // Seçiliyken alt çizgi kalır, değilken kalkar
        borderBottomColor: "#ffd00c",
      }}
      onPress={() => onSelectCategory(category.id)}
    >
      <Text style={{
        fontSize: 14,
        color: "white",
        fontWeight: selected ? "600" : "400",
        
      }}>{category.name}</Text>
    </TouchableOpacity>
  );
}

const CategoryFiltering = () => {
  const [categories, setCategories] = useState(categoriesGetir);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  useEffect(() => {
    // Sayfa ilk render olduğunda seçili state'i ilk dizin öğesi yap
    if (categories.length > 0 && selectedCategoryId === null) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories, selectedCategoryId]);

  const onSelectCategory = (categoryId) => {
    setSelectedCategoryId(categoryId); // Her tıklamada seçimi güncelle
  };

  return (
    <ScrollView
      style={{
        width: "100%",
        backgroundColor: "#7849f7",
        height: height * 0.065,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {categories.map((category) => (
        <CategoryBox
          key={category.id}
          category={category}
          selected={category.id === selectedCategoryId}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </ScrollView>
  )
}

export default CategoryFiltering
