import { View, Text } from 'react-native';
import { SigninFormData } from '@/hooks/useSignin';
import {Control, UseFormHandleSubmit, FieldErrors} from 'react-hook-form'

interface SigninScreenProps {
  control: Control<SigninFormData>,
  handleSubmit: UseFormHandleSubmit<SigninFormData>,
  errors: FieldErrors<SigninFormData>,
  isSubmitting: boolean,
  onSubmit: (data:SigninFormData) => Promise<void>
}

export default function SignInScreen({control, handleSubmit, errors, isSubmitting, onSubmit}: SigninScreenProps) {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  )
}