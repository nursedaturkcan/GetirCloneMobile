import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
   
  container: {
    width: width * 0.25,
    height: width * 0.3,
  
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:10,
    padding: 3,
  },
  image: {
    width: width * 0.2,
    height: height * 0.12,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    color: '#616161',
    fontWeight:"500"
  },
});
export default styles;
