import {db} from '@/services/firebase';
import {onSnapshot, collection, doc, updateDoc, addDoc, query, orderBy} from 'firebase/firestore'




export const taskService = {

    createTask: async(uid: string, data:{title:string, description:string, time:string, important:boolean}) => {

        const taskRef = collection(db, 'users', uid, 'tasks');

        await addDoc(taskRef, {
            title: data.title,
            description: data.description,
            time: data.time,
            important:data.important
        });
    },

    subscribe: () => {

    },

    updateTask: async() => {

    },

    deleteTask: async() => {

    }

}