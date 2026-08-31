import { Control, UseFormHandleSubmit, FieldErrors, Controller } from 'react-hook-form';
import { View, Text, TouchableNativeFeedback, Keyboard, TextInput, TouchableOpacity } from 'react-native';
import { SignupFormData } from '@/hooks/useSignup';
import { styles } from '@/styles/styleSignup';
import { Ionicons } from '@expo/vector-icons';
import {COLORS} from '@/constants/colors'


interface SignUpScreenProps {
  control: Control<SignupFormData>;
  handleSubmit: UseFormHandleSubmit<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  isSubmitting: boolean;
  onSubmit: (data: SignupFormData) => void;
  handleSignin: () => void
}


export default function SignUpScreen({ control, handleSubmit, errors, isSubmitting, onSubmit, handleSignin }: SignUpScreenProps) {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View style={styles.box1}>
        <View style={styles.containerIcon}>
          <Ionicons name='cube-outline' size={40} style={styles.icon}/>
        </View>
        <View style={styles.containerTitle}>
        <Text style={styles.titleBox1}>Comece agora</Text>
          <Text style={styles.textBox1}>Comece sua jornada rumo à produtividade consciente</Text>
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
                    <View style={{flex:1}}>
                      <TextInput
                          placeholder='Digite seu email'
                          placeholderTextColor={COLORS.subTitle}
                          autoCapitalize='none'
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                      />
                    </View>
                )
              }
            /> 
          </View>  
          <Text>{errors.email?.message}</Text>
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
                    <View style={{flex:1}}>
                      <TextInput
                          placeholder='******'
                          placeholderTextColor={COLORS.subTitle}
                          autoCapitalize='none'
                          onChangeText={onChange}
                          onBlur={onBlur}
                          value={value}
                      />
                    </View>
                )
              }
            /> 
          </View>  
          <Text style={styles.error}>{errors.email?.message}</Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>{isSubmitting ? 'Cadastrando' : 'Cadastrar'}</Text>
            <Ionicons name='arrow-forward-outline' size={28} color={COLORS.white} style={{alignSelf:'flex-end', paddingLeft:5}}/>
          </TouchableOpacity>
        </View>


            
      </View>

      <View style={styles.box3}>
        <View style={styles.containerCriarConta}>
            <Text style={styles.textConta}>Já tem uma conta?</Text>
            <TouchableOpacity onPress={handleSignin}>
              <Text style={styles.titleCriarConta}>Entrar</Text>    
            </TouchableOpacity> 
          </View>  
      </View>

    </View>
  </TouchableNativeFeedback>
  )
}