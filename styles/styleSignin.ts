import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 10,
        backgroundColor: COLORS.back2,
    },
    box1:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        
        paddingBottom:20
    },
    containerIcon:{
        paddingBottom:20,
        width: 40,
        height:40,
        borderWidth:1,
        borderColor:'green',
        alignSelf:'center'
    },
    textBox1:{
        fontSize:18,
        
    },
    box2:{
        flex:2,
        backgroundColor:'red',
    },
    box3:{
        flex:1
    }
})