import {db} from '@/services/firebase';
import {onSnapshot, collection, doc, updateDoc, addDoc, query, orderBy, serverTimestamp, Timestamp} from 'firebase/firestore'

type Task = {
    id: string;
    title: string;
    description: string;
    time: string;
    important: boolean;
    createdAt: Timestamp;
}


export const taskService = {

    createTask: async(uid: string, data:{title:string, description:string, time:string, important:boolean}) => {

        const taskRef = collection(db, 'users', uid, 'tasks');

        await addDoc(taskRef, {
            title: data.title,
            description: data.description,
            time: data.time,
            important:data.important,
            createdAt: serverTimestamp()
        });
    },

    subscribeTask: (uid: string, callback: (tasks: Task[]) => void) => {
        const taskRef = collection(db, 'users', uid, 'tasks');

        const q = query(taskRef, orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {

            const tasks = snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                } as Task;
            })

            callback(tasks);
        })

        return unsubscribe;
    },

    updateTask: async() => {

    },

    deleteTask: async() => {

    }

}