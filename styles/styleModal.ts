import { StyleSheet } from "react-native";
import { COLORS } from "@/constants/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.4)',
        justifyContent:'center',
        alignItems:'center'
    },
    containerInput:{
        width: '85%',
        height: '80%',
        backgroundColor:COLORS.back2,
        borderRadius:10
    }
})