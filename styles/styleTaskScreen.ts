import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";


export const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:COLORS.white,
        marginBottom:10,
        height:80,
        borderRadius:10,
    },
    containerIcon:{
        padding:10,
        borderRadius:10,
    },
    btn:{
        flex:1,
    },
    icon:{
        // color:COLORS.primary
    },
    containerTitle:{
        flex:1,
        borderRadius:10,
        padding:10
    },
    textDescription:{
        fontSize:18,
        color:COLORS.primary,
        fontWeight:500
    },
    containerTime:{
        flexDirection:'row',
        marginTop:10
    },
    time:{
        flexDirection:'row',
        paddingRight:14
    },
    iconTime:{
        paddingRight:5,
        color:COLORS.subTitle
    },
    textTime:{
        color:COLORS.primary
    },
    subTitle:{
        flexDirection:'row'
    },
    edit:{
        width:55,
        height:80,
    },
    btnEdit:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnExcluir:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    iconEdit:{
        color:COLORS.subTitle
    }
})