import { useState } from 'react';

const TodoList = () => {
    const [tasks, setTasks] = useState([]); // Array to store tasks
    const [newTask, setNewTask] = useState(""); // Input field state

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]); // Add new task to the task list
            setNewTask(""); // Clear the input field
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task by index
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <h4>Create task</h4>
            
            {/* Input field to type the new task */}
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Write your task here"
                className="task"
            />
            {/* Button to add the task */}
            <button onClick={addTask} className="submit">Add Task</button>

            <h3>Your Tasks Here:</h3>
            <ul>
                {
                    tasks.map((task, index) => {
                        return (
                            <div className="taskList" key={index}>
                               <li>{task}</li>
                                <button onClick={() => deleteTask(index)}>Delete</button>
                            </div>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default TodoList;
