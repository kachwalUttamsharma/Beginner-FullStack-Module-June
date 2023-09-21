import React from "react";
import { useReducer } from "react";
import { taskReducers, formReducer } from "./reducer";
import {TiTick, TiTrash} from 'react-icons/ti';

const ToDoListReducer = () => {
  const [list, dispatch] = useReducer(taskReducers, []);
  const [task, taskDispatch] = useReducer(formReducer, { title: "", by: "" });

  return (
    <div>
      <h1>ToDoList</h1>
      <div>
        I want to
        <input
          type="text"
          name="title"
          value={task?.title}
          onChange={(e) => {
            taskDispatch({
              type: "HANDLE_TASK",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
        />
        by
        <input
          type="date"
          name="by"
          value={task?.by}
          onChange={(e) => {
            taskDispatch({
              type: "HANDLE_TASK",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
        />
        <button onClick={() => dispatch({ type: "ADD_TASK", payload: task })}>
          Add a Task
        </button>
      </div>
      <ul>
        {list &&
          list.length > 0 &&
          list.map((item) => {
            return (
              <li key={item?.id}>
                <span
                  style={{ textDecoration: item?.isDone ? "line-through" : "" }}
                >
                  <strong>{item?.title}</strong> is due by {item?.by}
                  <span>
                    <TiTick
                      size={24}
                      onClick={() =>
                        dispatch({ type: "DONE_TASK", payload: item.id })
                      }
                    />
                  </span>
                  <span>
                    <TiTrash
                      size={24}
                      onClick={() =>
                        dispatch({ type: "REMOVE_TASK", payload: item.id })
                      }
                    />
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ToDoListReducer;
