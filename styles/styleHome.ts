import { COLORS } from "@/constants/colors"
import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.background
    },
    box1:{
        flex:1,
        backgroundColor:COLORS.textHome,
        borderEndEndRadius:35,
        borderStartEndRadius:35,
        padding:10    
    },
    containerTitleBox1:{
        flex:2,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        gap:2
    },
    titleBox1:{
        fontSize:17,
        color: COLORS.white,
        fontWeight:'600'
    },
    containerSearch:{
        borderWidth:1,
        borderColor: COLORS.primary,
        backgroundColor:COLORS.white,
        flexDirection:'row',
        alignItems:'center',
        flex: 1,
        marginRight:8,
        borderRadius:8,
        paddingLeft:5
    },
    containerSearchBox1:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    inputSearch:{
        flex:1,
        
    },
    btnCriar:{
        borderWidth:1,
        padding:10,
        backgroundColor: COLORS.white,
        borderRadius:8,
        borderColor:COLORS.primary,
        paddingLeft:15,
        paddingRight:15
    },
    textCriar:{
        fontWeight: 'bold',
        fontSize:16
    },
    box2:{
        flex:2,
        padding:10,
    },
    titleTask:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    taskToday:{
        fontSize:18,
        fontWeight:'500',
        color: COLORS.primary
    },
    taskDay:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:10,
        paddingLeft:4,
        paddingRight:4,
        backgroundColor:COLORS.white,
        borderColor: COLORS.primary
    },
    containerTasks:{
        flex:1,
        borderWidth:1,
        marginTop:10
    },
})