import SignUpScreen from '@/screen/signup';
import { useSignup } from '@/hooks/useSignup';


export default function SignUp() {

  const {control, handleSubmit, errors, isSubmitting, onSubmit} = useSignup();

  return (
    <SignUpScreen control={control} handleSubmit={handleSubmit} errors={errors} 
    isSubmitting={isSubmitting} onSubmit={onSubmit} />
  )
}