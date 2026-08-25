import SignInScreen from '@/screen/signin';
import { SigninFormData } from '@/hooks/useSignin';
import {useSignin} from '@/hooks/useSignin'



export default function SignIn() {

  const {control, handleSubmit, errors, isSubmitting, onSubmit} = useSignin()

  return (
    <SignInScreen control={control} handleSubmit={handleSubmit} errors={errors}
      isSubmitting={isSubmitting} onSubmit={onSubmit}
    />
  )
}