import React, { useState } from "react";
import {TiTick, TiTrash} from 'react-icons/ti';
import uuid from 'react-uuid';

const ToDoList = () => {
  const [task, setTask] = useState({
    title: "",
    by: "",
  });

  const [list, setList] = useState([]);

  const handleTask = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setTask({ ...task, [key]: value });
  };

  const addTask = () => {
    const updatedTask = {...task, id: uuid(), isDone: false}
    const updated = [...list, updatedTask];
    setList(updated);
    setTask({
        title: "",
        by: "",
      });
  };

  const markDone = (id) => {
    const index = list.findIndex((task) => task.id === id);
    const doneTask = [...list];
    doneTask[index].isDone = true;
    setList(doneTask);
  }

  const deleteTask = (id) => {
    const filteredTask = list.filter((task) => task.id != id);
    setList(filteredTask);
  }
  return (
    <div>
      <h1>ToDoList</h1>
      <div>
        I want to <input type="text" name="title" value={task?.title} onChange={handleTask} /> by
        <input type="date" name="by" value={task?.by} onChange={handleTask} />
        <button onClick={addTask}>Add a Task</button>
      </div>
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item) => {
            return (
              <li key={item?.id}>
                <span style={{textDecoration: item?.isDone ? 'line-through' : ''}}>
                  <strong>{item?.title}</strong> is due by {item?.by}
                  <span><TiTick size={24} onClick={() => markDone(item?.id)}/></span>
                  <span><TiTrash size={24} onClick={() => deleteTask(item?.id)} /></span>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ToDoList;
