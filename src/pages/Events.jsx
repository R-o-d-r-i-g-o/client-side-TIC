import styles from './Events.module.css'
import { useState } from "react"; // KeyboardEvent
import { v4 as uuid } from "uuid";
// import { FiTrash, FiCheckSquare } from "react-icons";

export const Events = () => {

    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const handleCreateNewTask = () => {
        if (newTaskTitle === "") return;
        const createNewTask = [
          ...tasks, { id: uuid(), title: newTaskTitle, isComplete: false },
        ];

        setTasks(createNewTask);
        setNewTaskTitle("");
    }

    const handleToggleTaskCompletion = (id) => {

        const toggleTasks = tasks.map((task) => {
            if (task.id === id) task.isComplete = !task.isComplete;
            return task }); setTasks(toggleTasks);
    }

    const handleRemoveTask = (id) => {
        const toggleTasks = tasks.filter((task) => task.id !== id);
        setTasks(toggleTasks);
    }

    const handleKeyDown = (event) => {
        const { key } = event;
        console.log(key);

        if (key === "Enter") handleCreateNewTask();
    }

    return (
        <div>
            <div className={styles.text}>Dashboard</div>
            <p>jjfkdsjklkl</p>


    <section className={styles.taskList}> {/*  "container" */}
      <header>
        <h2>Minhas tasks</h2>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Adicionar novo todo"
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
            onKeyDown={handleKeyDown}
          />
          <button
            type="submit"
            data-testid="add-task-button"
            onClick={handleCreateNewTask}
          >
            {/* <FiCheckSquare size={16} color="#fff" /> */}
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <div
                className={task.isComplete ? "completed" : ""}
                data-testid="task"
              >
                <label className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    readOnly
                    checked={task.isComplete}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  />
                  <span className={styles.checkmark}></span>
                </label>
                <p>{task.title}</p>
              </div>

              <button
                type="button"
                data-testid="remove-task-button"
                onClick={() => handleRemoveTask(task.id)}
              >
                {/* <FiTrash size={16} /> */}
              </button>
            </li>
          ))}
        </ul>
      </main>
    </section>



        </div>
    );
};