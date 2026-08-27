import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 10,
        backgroundColor: COLORS.back2,
        padding:10
    },
    box1:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:20
    },
    containerIcon:{
        width: 70,
        height:70,
        borderWidth:1,
        borderColor:COLORS.primary,
        backgroundColor:COLORS.background,
        justifyContent:'center',
        alignItems:'center', 
        marginBottom:25,
        borderRadius:5
    },
    icon:{
        color: COLORS.primary
    },
    textBox1:{
        fontSize:15,
        fontWeight:'bold'
    },
    box2:{
        flex:2,
        
        paddingTop:40
    },
    titleInput:{
        fontSize:20,
        fontWeight:'500'
    },
    containerInputBox2:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderWidth:1,
        borderRadius:5,
        borderEndColor:COLORS.primary,
        marginTop: 10,
        backgroundColor:COLORS.background,
        height:50
    },
    iconInput:{
        paddingLeft:2,
    },
    error:{
        color:'red'
    },
    btnContainer:{
        marginTop:50
    },
    btn:{
        backgroundColor:COLORS.primary,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:10
    },
    textBtn:{
        color:COLORS.white,
        fontWeight:'700',
        fontSize:25
    },
    containerCriarConta:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    textConta:{
        paddingRight:5,
        color:COLORS.text
    },
    titleCriarConta:{
        color:COLORS.primary,
        fontWeight:'500'
    },
    box3:{
        flex:0.5
    }
})