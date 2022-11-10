import Logo from "../../assets/logo.svg";
import styles from "./header.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  handleCreateTasks: (taskTitle: string) => void;
}

const Header = ({ handleCreateTasks }: HeaderProps) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleCreateTasks(title);
    setTitle("");
  };

  const onChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={Logo} alt="To Do List Logo" />
      <h1 className={styles.logo}>
        to<span>do</span>
      </h1>

      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTask}
          value={title}
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
