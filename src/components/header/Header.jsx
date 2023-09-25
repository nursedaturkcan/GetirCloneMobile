import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Icon from 'react-native-vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
      <Image style={styles.image} source={{uri:"https://cdn.getir.com/misc/emoji/house.png"}}/>
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Ev</Text>
          <Text>Aşağı Kayabaşı mh. Seçkin sk....</Text>
          <Icon name="chevron-right" size={24} color="#5d3ebd" />
        </View>
      </View>

      <View style={styles.rightSide}>
        <Text style={styles.purpleText}>TVS</Text>
        <View style={styles.minute}>
          <Text style={styles.largeText}>13</Text>
          <Text style={styles.purpleText}>dk</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
