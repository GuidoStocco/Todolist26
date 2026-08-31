import SignInScreen from '@/screen/signin';
import {useSignin} from '@/hooks/useSignin'



export default function SignIn() {

  const {control, handleSubmit, errors, isSubmitting, onSubmit, handleSignup} = useSignin()

  return (
    <SignInScreen control={control} handleSubmit={handleSubmit} errors={errors}
      isSubmitting={isSubmitting} onSubmit={onSubmit} handleSignup={handleSignup}
    />
  )
}