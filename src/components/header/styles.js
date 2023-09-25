import { Dimensions, StyleSheet } from "react-native";

const {height}=Dimensions.get("window");
const styles=StyleSheet.create({
container:{
    height:height*0.064,
    backgroundColor:"#f7d102",
    flexDirection:"row",
   
},
leftSide:{
    backgroundColor:"white",
    width:"80%",
    flexDirection:"row",
    alignItems:"center",
    gap:9,
    paddingHorizontal:"3%",
    borderTopRightRadius:25,
    borderBottomRightRadius:25
},
image:{
width:30,
height:30
},
textContainer:{
    flexDirection:"row",
    height:height*0.064,
    alignItems:"center",
    gap:10,
    borderLeftWidth:2,
    borderLeftColor:"#f3f2fd",
    
    
},
boldText:{
    fontWeight:"bold",
    color:"black",
   paddingLeft:6
},
rightSide:{
height:height*0.064,

justifyContent:"center",
width:"25%",
alignItems:"center"

},
minute:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    
},
largeText:{
    fontSize:20,
    fontWeight:"500",
    color:"#5d3ebd"
},
purpleText:{
    color:"#5d3ebd"
}
})
export default styles;