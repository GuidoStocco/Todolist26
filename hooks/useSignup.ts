import {z} from "zod";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthServices } from "@/services/auth_services";
import { useRouter } from "expo-router";


const SignupSchema = z.object({
    name: z.string().min(1, { message: "Nome é obrigatório" }),
    email: z.email().min(1, { message: "Email é obrigatório" }),
    password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
}).refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas não coincidem",
});

export type SignupFormData = z.infer<typeof SignupSchema>;


export const useSignup = () => {

    const router = useRouter();

    const{control, handleSubmit, formState:{errors, isSubmitting}} = useForm<SignupFormData>({
        resolver: zodResolver(SignupSchema),
    });


    const onSubmit = async(data: SignupFormData) => {
        try {
            await AuthServices.signUp(data.name, data.email, data.password);
            router.replace("/(painel)/home/page");
        } catch (error) {
            console.error(error);
        }
    }

    return {
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit,
    }
}