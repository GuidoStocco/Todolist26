import { Control, UseFormHandleSubmit, FieldErrors } from 'react-hook-form';
import { View, Text } from 'react-native';
import { SignupFormData } from '@/hooks/useSignup';


interface SignUpScreenProps {
  control: Control<SignupFormData>;
  handleSubmit: UseFormHandleSubmit<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  isSubmitting: boolean;
  onSubmit: (data: SignupFormData) => void;
}


export default function SignUpScreen({ control, handleSubmit, errors, isSubmitting, onSubmit }: SignUpScreenProps) {
  return (
    <View>
      <Text>SignUpScreen</Text>
    </View>
  )
}