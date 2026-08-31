import { COLORS } from "@/constants/colors";
import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 10,
        backgroundColor: COLORS.background,
        padding:10
    },
    box1:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        paddingBottom:20,
        marginTop:20
    },
    containerIcon:{
        width: 70,
        height:70,
        borderWidth:1,
        borderColor:COLORS.primary,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center', 
        marginBottom:25,
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    icon:{
        color: COLORS.primary
    },
    containerTitle:{
        
    },
    titleBox1:{
        alignSelf:'center',
        fontSize:35,
        fontWeight:'bold',
        color:COLORS.primary
    },
    textBox1:{
        fontSize:16,
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
        backgroundColor:COLORS.white,
        height:50
    },
    iconInput:{
        paddingLeft:5
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
        justifyContent:'center',
        alignItems:'flex-end',
        marginBottom:15
    },
    textConta:{
        paddingRight:5,
        color:COLORS.text
    },
    titleCriarConta:{
        color:COLORS.primary,
        fontWeight:'500',
        fontSize:16
    },
    box3:{
        flex:0.5
    }
})