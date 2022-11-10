import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { ITask } from "./interfaces/ITask";

const LOCAL_STORAGE_TASK_KEY = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getStoredTasks = () => {
    const savedTask = localStorage.getItem(LOCAL_STORAGE_TASK_KEY);

    if (savedTask) {
      setTasks(JSON.parse(savedTask));
    }
  };

  useEffect(() => {
    getStoredTasks();
  }, []);

  const saveTasks = (newTasks: ITask[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_TASK_KEY, JSON.stringify(newTasks));
  };

  const handleCreateTasks = (taskTitle: string) => {
    saveTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isDone: false,
      },
    ]);
  };

  const deleteTasks = (taskId: string) => {
    const newTasks = tasks.filter((t) => t.id !== taskId);

    saveTasks(newTasks);
  };

  const markTaskCompleted = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });

    saveTasks(newTasks);
  };

  return (
    <div>
      <Header handleCreateTasks={handleCreateTasks} />
      <Tasks
        tasks={tasks}
        deleteTasks={deleteTasks}
        markTaskCompleted={markTaskCompleted}
      />
    </div>
  );
}

export default App;
