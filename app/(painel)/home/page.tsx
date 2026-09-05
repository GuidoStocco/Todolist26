import HomeScreen from '@/screen/home';
import { useTask } from '@/hooks/useTask';
import { useModal } from '@/hooks/useHome';

export default function Home() {

  const {tasks, loading, createTask, updateTask, deleteTask} = useTask();
  const {handleModal, modal} = useModal();

  return (
    <HomeScreen tasks={tasks} loading={loading} createTask={createTask} updateTask={updateTask} deleteTask={deleteTask} 
      handleModal={handleModal} modal={modal}
    />
  )
}