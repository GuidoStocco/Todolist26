import { View, Text, Pressable, Keyboard, TouchableNativeFeedback } from 'react-native';
import { SigninFormData } from '@/hooks/useSignin';
import {Control, UseFormHandleSubmit, FieldErrors} from 'react-hook-form'
import { styles } from '@/styles/styleSignin';
import {Ionicons} from '@expo/vector-icons/'


interface SigninScreenProps {
  control: Control<SigninFormData>,
  handleSubmit: UseFormHandleSubmit<SigninFormData>,
  errors: FieldErrors<SigninFormData>,
  isSubmitting: boolean,
  onSubmit: (data:SigninFormData) => Promise<void>
}

export default function SignInScreen({control, handleSubmit, errors, isSubmitting, onSubmit}: SigninScreenProps) {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.containerIcon}>
            <Ionicons name='checkmark-done-outline' size={30}/>
          </View>
          <Text style={styles.textBox1}>Continue sua jornada rumo à produtividade consciente</Text>
        </View>

        <View style={styles.box2}>
          <Text>SignInScreen</Text>
        </View>

        <View style={styles.box3}>
          <Text>SignInScreen</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}