import {View, Text, Pressable} from 'react-native';
import { taskInput } from '@/services/taskServices';
import { styles } from '@/styles/styleModal';

interface ModalScreenProps{
    fecharModal: () => void;
    createTask: (data:taskInput) => void;
}


export default function ModalScreen({fecharModal, createTask} : ModalScreenProps) {
    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <Text>ModalScreen</Text>
                <Pressable onPress={fecharModal}>
                    <Text>Fechar</Text>
                </Pressable>
            </View>
        </View>
    )
};