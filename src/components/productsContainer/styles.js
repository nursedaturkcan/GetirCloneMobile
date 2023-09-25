import { StyleSheet } from 'react-native'





const styles = StyleSheet.create({
    mainContainer:{
        gap:10
    },
    topContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:"white"
    },
    heading:{
        color:"grey",
        fontWeight:"bold",
        marginLeft:10

    },
    bottomContainer:{
        flexDirection:"row",
        flexWrap:"wrap",
        flex:1,
        backgroundColor:"white",
        paddingVertical:10,
        alignItems:"center"
    }

})
export default styles