import HomeScreen from '@/screen/home';
import { useTask } from '@/hooks/useTask';

export default function Home() {

  const {tasks, loading, createTask, updateTask, deleteTask} = useTask();

  return (
    <HomeScreen tasks={tasks} loading={loading} createTask={createTask} updateTask={updateTask} deleteTask={deleteTask} />
  )
}