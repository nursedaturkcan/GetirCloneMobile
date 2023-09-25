import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';


const { width, height } = Dimensions.get("window");

const Banner = () => {
  const banners = [
    {
      id: 1,
      imageUrl: "https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg",
    },
    {
      id: 2,
      imageUrl: "https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg",
    },
    {
      id: 3,
      imageUrl: "https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg",
    },
    {
      id: 4,
      imageUrl: "https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg",
    },
  ];

  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    setActiveIndex((prevIndex) => {
      const newIndex = prevIndex === banners.length - 1 ? 0 : prevIndex + 1;
      return newIndex;
    });
  };

  // Otomatik kaydırma için zamanlayıcı oluşturma
  useEffect(() => {
    const timer = setInterval(() => {
      if (flatListRef.current) {
        handleScroll();
        flatListRef.current.scrollToIndex({ index: activeIndex });
      }
    }, 3000); // 3 saniyede bir kaydır

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);

  return (
    <FlatList
      ref={flatListRef}
      data={banners}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item.imageUrl }}
          style={{ width: width, height: height * 0.25, resizeMode: "stretch" }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      pagingEnabled={true}
    />
  );
}

export default Banner;
