import { ITask } from "../../interfaces/ITask";
import ClipboardIcon from "../../assets/clipboard.svg";
import Task from "../Task";
import styles from "./tasks.module.css";

interface TasksProps {
  tasks: ITask[];
  deleteTasks: (taskId: string) => void;
  markTaskCompleted: (taskId: string) => void;
}

const Tasks = ({ tasks, deleteTasks, markTaskCompleted }: TasksProps) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isDone).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.tasksHeader}>
        <div>
          <p>Tarefas Criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.purple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.taskList}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTasks={deleteTasks}
            markTaskCompleted={markTaskCompleted}
          />
        ))}

        {tasks.length <= 0 && (
          <div className={styles.noTasks}>
            <img
              src={ClipboardIcon}
              alt="Ícone indicando que não existem tarefas criadas"
            />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus items a fazer</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tasks;
