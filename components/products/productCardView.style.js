import { StyleSheet } from "react-native";
import { COLORS,SIZES } from "../../constants";

const styles = StyleSheet.create({
    container:{
        width:150,
        height:200,
        marginEnd:22,
        borderRadius:SIZES.medium,
        backgroundColor:COLORS.secondary,
        marginTop:10,
        marginHorizontal:SIZES.medium,
    },
    imageContainer:{
        flex:1,
        width:100,
        marginLeft:SIZES.small/2,
        marginTop:SIZES.small/2,
        borderRadius:SIZES.small,
        
        overflow:"hidden"
    },
    image:{
        aspectRatio:1,
        width:80,
        height:100,
        resizeMode:'cover',
    },
    details:{
        padding:SIZES.small-10
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
    },
    price:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        marginBottom:SIZES.xxLarge+9
    },
    addBtn:{
        position:"absolute",
        bottom:SIZES.xSmall+16,
        right:SIZES.xSmall
    }
})

export default styles;