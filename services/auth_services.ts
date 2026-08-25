import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";




export const AuthServices = {
    signUp: async(name: string, email:string, password:string) => {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, { displayName: name });
            return userCredential;
       
    },

    signIn: async(email:string, password:string) => {
        
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential;

    },

    signOut: async() => {
            await signOut(auth);
    }
}