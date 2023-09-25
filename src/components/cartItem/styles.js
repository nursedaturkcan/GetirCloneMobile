import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const {width,height}=Dimensions.get("window");



const styles = StyleSheet.create({
   
    container:{
        height:height*0.13,
            paddingHorizontal:width*0.04,
        backgroundColor:"white",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:0.4,
        borderBottomColor:"lightgray"
    },
leftSide:{
    flexDirection:"row",
    alignItems:"center"
},
image:{
    height:height*0.09,
    width:height*0.09,
    borderWidth:0.4,
    borderColor:"lightgray",
    borderRadius:6
},
info:{
    marginLeft:8
},
name:{
fontSize:13,
fontWeight:"600",
maxWidth:width*0.45

},
mass:{
    fontSize:12,
    marginTop:3,
    color:"#848897",
    fontWeight:"600",
    
},
price:{
color:"#5d3ebd",
fontWeight:"bold",
marginTop:6,
fontSize:15
},
rightSide:{
    flexDirection:"row",
    width:width*0.2,
    borderColor:"lightgray",
    borderWidth:0.5,
    height:height*0.04,
    borderRadius:10,
    justifyContent:"space-around",
    alignItems:"center",
    shadowOpacity:0.4,
   
    shadowColor:"gray"
    
},
touchable:{
    flex:1,
    alignItems:"center"
},
centerQuantitiy:{
    backgroundColor:"#5d3ebd",
    height:height*0.037,
    justifyContent:"center"
},
centerQuantitiyText:{
    fontWeight:"bold",
    color:"white",
    fontSize:12
}

})
export default styles