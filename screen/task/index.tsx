import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import { Task } from '@/services/taskServices';
import {styles} from '@/styles/styleTaskScreen'
import { Ionicons } from '@expo/vector-icons';



export default function TaskScreen() {
    return(
        <View style={styles.container}>    
            {/* button */}
            <View style={styles.containerIcon}>  
                <TouchableOpacity style={styles.btn}>
                    <Ionicons name='ellipse-outline' size={30} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {/* text */}
            <View style={styles.containerTitle}>
                {/* maximo de letras 31 */}
                <Text style={styles.textDescription}>Terminar feature React native</Text>  
                <View style={styles.containerTime}>
                    <View style={styles.time}>
                        <Ionicons name='time-outline' size={18} style={styles.iconTime}/>
                        <Text style={styles.textTime}>14:30</Text>
                    </View>
                    <View style={styles.subTitle}>
                        <Ionicons name='folder-open-outline' size={18} style={styles.iconTime}/>
                        {/* maximo15 */}
                        <Text style={styles.textTime}>Feature</Text>
                    </View>
                </View>
            </View>
            {/* edit */}
            <View style={styles.edit}>
                <Pressable style={styles.btnEdit}>
                    <Ionicons name='create-outline' size={25} style={styles.iconEdit}/>
                </Pressable>

                <Pressable style={styles.btnExcluir}>
                    <Ionicons name='trash-outline' size={25} style={styles.iconEdit}/>
                </Pressable>
            </View>
        </View>
    )
};