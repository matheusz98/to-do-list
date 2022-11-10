import styles from "./task.module.css";
import { Trash } from "phosphor-react";
import { ITask } from "../../interfaces/ITask";
import { CheckCircle } from "phosphor-react";

interface TaskProps {
  task: ITask;
  deleteTasks: (taskId: string) => void;
  markTaskCompleted: (taskId: string) => void;
}

const Task = ({ task, deleteTasks, markTaskCompleted }: TaskProps) => {
  return (
    <div className={styles.task}>
      <button
        className={styles.check}
        onClick={() => markTaskCompleted(task.id)}
      >
        {task.isDone ? <CheckCircle /> : <div />}
      </button>

      <p style={{ textDecoration: task.isDone ? "line-through" : "none" }}>
        {task.title}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => deleteTasks(task.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
};

export default Task;
