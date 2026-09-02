import {db} from '@/services/firebase';
import {onSnapshot, collection, doc, updateDoc, addDoc, query, orderBy, serverTimestamp, Timestamp, deleteDoc} from 'firebase/firestore'

type Task = {
    id: string;
    title: string;
    description: string;
    time: string;
    important: boolean;
    createdAt: Timestamp;
}

// serverTimestamp() é uma função que retorna o timestamp atual do servidor (data e hora) melhor para criar tarefas

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
    // subscribeTask é uma função que subscreve a coleção de tarefas do usuário e retorna as tarefas em ordem decrescente de criação
    // callback é uma função que recebe as tarefas e retorna as tarefas em ordem decrescente de criação
    // q é uma query que ordena as tarefas por createdAt em ordem decrescente

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
    // partial serve para atualizar apenas alguns campos da tarefa
    updateTask: async(uid: string, taskId: string, data:Partial<{title:string, description:string, time:string, important:boolean}>) => {

        const taskRef = doc(db, 'users', uid, 'tasks', taskId);

        await updateDoc(taskRef, {
            ...data
        });
    },
    
    deleteTask: async(uid: string, taskId: string) => {
        const taskRef = doc(db, 'users', uid, 'tasks', taskId);
        await deleteDoc(taskRef);
    }

}