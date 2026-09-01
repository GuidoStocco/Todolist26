import { View, Text, Pressable, Keyboard, TouchableWithoutFeedback, TextInput, TouchableOpacity } from 'react-native';
import { SigninFormData } from '@/hooks/useSignin';
import {Control, UseFormHandleSubmit, FieldErrors, Controller,} from 'react-hook-form'
import { styles } from '@/styles/styleSignin';
import {Ionicons} from '@expo/vector-icons/'
import { COLORS } from '@/constants/colors';


interface SigninScreenProps {
  control: Control<SigninFormData>,
  handleSubmit: UseFormHandleSubmit<SigninFormData>,
  errors: FieldErrors<SigninFormData>,
  isSubmitting: boolean,
  onSubmit: (data:SigninFormData) => Promise<void>,
  handleSignup:() => void
}

export default function SignInScreen({control, handleSubmit, errors, isSubmitting, onSubmit, handleSignup}: SigninScreenProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.box1}>
          <View style={styles.containerIcon}>
            <Ionicons name='checkmark-done-outline' size={40} style={styles.icon}/>
          </View>
          <View style={styles.containerTitle}>
          <Text style={styles.titleBox1}>Bem-vindo</Text>
            <Text style={styles.textBox1}>Continue sua jornada rumo à produtividade consciente</Text>
          </View>
        </View>

        <View style={styles.box2}>
          <View>
            <Text style={styles.titleInput}>Email</Text>
            <View style={styles.containerInputBox2}>
              <Ionicons name='mail-outline' color={COLORS.text} size={30} style={styles.iconInput}/>
              <Controller
                  control={control}
                  name='email'
                  defaultValue=''
                  render={({field: {onBlur, onChange,value}})=> (                   
                        <TextInput
                            placeholder='Digite seu email'
                            placeholderTextColor={COLORS.subTitle}
                            autoCapitalize='none'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={{flex:1}}
                        />
                  )
                }
              /> 
            </View>  
            <Text style={styles.error}>{errors.email?.message}</Text>
          </View>

          <View>
            <Text style={styles.titleInput}>Senha</Text>
            <View style={styles.containerInputBox2}>
              <Ionicons name='lock-closed-outline' color={COLORS.text} size={30} style={styles.iconInput}/>
              <Controller
                  control={control}
                  name='password'
                  defaultValue=''
                  render={({field: {onBlur, onChange,value}})=> (
                      
                        <TextInput
                            placeholder='******'
                            placeholderTextColor={COLORS.subTitle}
                            autoCapitalize='none'
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            style={{flex:1}}
                        />
                      
                  )
                }
              /> 
            </View>  
            <Text style={styles.error}>{errors.password?.message}</Text>
          </View>

          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textBtn}>{isSubmitting ? 'Entrando' : 'Entrar'}</Text>
              <Ionicons name='arrow-forward-outline' size={28} color={COLORS.white} style={{alignSelf:'flex-end', paddingLeft:5}}/>
            </TouchableOpacity>
          </View>


              
        </View>

        <View style={styles.box3}>
          <View style={styles.containerCriarConta}>
              <Text style={styles.textConta}>Não tem uma conta?</Text>
              <TouchableOpacity onPress={handleSignup}>
                <Text style={styles.titleCriarConta}>Criar conta</Text>    
              </TouchableOpacity> 
            </View>  
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}