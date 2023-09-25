import { StyleSheet, Dimensions } from 'react-native'




const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        width: width * 0.28,
        marginTop: 12,
        height: height * 0.25,
        marginLeft: 12,
        marginBottom: 10
    },
    image: {
        width: width * 0.28,
        height: width * 0.28,
        borderRadius: 12,
        borderWidth: 0.1,
        borderColor: "gray"
    },
    textContainer: {
        marginTop: 10
    },
    priceContainer: {
        flexDirection:"row",
        alignItems:"center"
    },
    discount: {
        fontSize: 12,
        color: "#747990",
        textDecorationLine: "line-through"
    },
    price: {
color:"#5d3ebd",
fontWeight:"bold",
marginLeft:4
    },
    description: {
fontSize:12,
fontWeight:"600",
marginTop:5
    },
    mass: {
color:"#747990",
fontSize:12,
marginTop:4,
fontWeight:"500"
    },
    plus:{
        width:30,
        height:30,
        borderWidth:0.3,
        borderColor:"lightgrey",
        backgroundColor:"white",
        position:"absolute",
        right:-6,
        top:-6,
        alignItems:"center",
        justifyContent:"center",
        shadowRadius:3.8,
        shadowOpacity:0.05,
        borderRadius:5
    },
    icon:{
        fontSize:22,
        color:"#5d3ebd",
        fontWeight:"bold"
    }
})

export default styles