import { useState, useEffect } from 'react';
import { taskService, Task, taskInput } from '@/services/taskServices';
import { useAuth } from '@/hooks/useAuth';





export const useTask = () => {

    const {user} = useAuth();
    const [tasks, setTasks] = useState<Task[]>([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!user?.uid) return;

        const unsubscribe = taskService.subscribeTask(user.uid, (data) => {
            setTasks(data);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [user?.uid]);


   
    const createTask = async (data: taskInput) => {
        if (!user?.uid) return;
        await taskService.createTask(user.uid, data);
    }

    const updateTask = async (taskId: string, data: Partial<taskInput>) => {
        if (!user?.uid) return;
        await taskService.updateTask(user.uid, taskId, data);
        
    }

    const deleteTask = async (taskId: string) => {
        if (!user?.uid) return;
        await taskService.deleteTask(user.uid, taskId);
    }

    return{
        tasks,
        loading,
        createTask,
        updateTask,
        deleteTask
    }
}