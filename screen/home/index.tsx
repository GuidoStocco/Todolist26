import { View, Text, TextInput, Pressable, FlatList, Modal} from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import {styles} from '@/styles/styleHome'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';
import { taskInput, Task } from '@/services/taskServices';
import TaskScreen from '@/screen/task';
import { randomMessages } from '@/hooks/useHome';
import { useAuth } from '@/hooks/useAuth';
import ModalScreen from './modal';


interface HomeScreenProps {
  tasks: Task[];
  loading: boolean;
  createTask: (data: taskInput) => void;
  updateTask: (taskId: string, data: Partial<taskInput>) => void;
  deleteTask: (taskId: string) => void;
  handleModal: () => void;
  modal: boolean;
}

export default function HomeScreen({tasks, loading, createTask, updateTask, deleteTask, handleModal, modal}: HomeScreenProps) {

  const {user} = useAuth()

  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>
      <View style={styles.container}>

        <View style={styles.box1}>
          <View style={styles.containerTitleBox1}>
            <Text style={styles.titleBox1}>Bem-vindo(a)</Text>
            <Text style={[styles.titleBox1, {paddingLeft:4,paddingRight:3}]}>{user?.displayName},</Text>
            <Text style={styles.titleBox1}>{randomMessages()}</Text>
          </View>

          <View style={styles.containerSearchBox1}>
            <View style={styles.containerSearch}>
              <Ionicons name='search-outline' size={30} color={COLORS.primary}/>
              <TextInput
                placeholder='Qual task você procura?'
                style={styles.inputSearch}
              />
            </View>

            <Pressable style={styles.btnCriar} onPress={handleModal}>
              <Text style={styles.textCriar}>+</Text>
            </Pressable>
          </View>
          
        </View>

        <Modal
          visible={modal}
          animationType='fade'
          transparent={true}
          onRequestClose={handleModal}
        >
          <ModalScreen fecharModal={handleModal} createTask={createTask}/>
        </Modal>

        <View style={styles.box2}>

          <View style={styles.titleTask}>
            <Text style={styles.taskToday}>Hoje</Text>
            <View style={styles.taskDay}>
              <Text style={[styles.taskToday, {paddingRight:5}]}>0</Text>
              <Text style={styles.taskToday}>Task</Text>
            </View>
          </View>
          
          <View style={styles.containerTasks}>
            {/* <FlatList 
              data={tasks}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TaskScreen task={item} />
              )}

            /> */}
            <TaskScreen />
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}