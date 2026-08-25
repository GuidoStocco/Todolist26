import {z} from "zod";
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {AuthServices} from '@/services/auth_services';
import { useRouter } from 'expo-router';



const SigninSchema = z.object({
    name: z.email('Email precisar ser válido'),
    password: z.string('A senha está errada')
})


export type SigninFormData = z.infer<typeof SigninSchema>


export const useSignin = () => {

    const router = useRouter();

    const {control, handleSubmit, formState:{errors, isSubmitting}} = useForm<SigninFormData>({
        resolver: zodResolver(SigninSchema)
    })

    const onSubmit = async(data: SigninFormData) => {
        try {
            await AuthServices.signIn(data.name, data.password);
            router.replace("/(painel)/home/page")
        } catch (error) {
            console.log(error)
        }
    }

    return{
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit
    }

}