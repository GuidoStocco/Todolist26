import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import {styles} from '@/styles/styleHome'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/colors';
import TaskScreen from '../task';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex:1}} edges={['top']}>
      <View style={styles.container}>

        <View style={styles.box1}>
          <View style={styles.containerTitleBox1}>
            <Text style={styles.titleBox1}>Bem-vindo(a)</Text>
            <Text style={[styles.titleBox1, {paddingLeft:4,paddingRight:3}]}>Guido Stocco,</Text>
            <Text style={styles.titleBox1}>Foco no progresso</Text>
          </View>

          <View style={styles.containerSearchBox1}>
            <View style={styles.containerSearch}>
              <Ionicons name='search-outline' size={30} color={COLORS.primary}/>
              <TextInput
                placeholder='Qual task você procura?'
                style={styles.inputSearch}
              />
            </View>

            <Pressable style={styles.btnCriar}>
              <Text style={styles.textCriar}>+</Text>
            </Pressable>
          </View>
          
        </View>

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
              data={}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <TaskScreen />
              )}

            /> */}
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}