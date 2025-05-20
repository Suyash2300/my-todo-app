import React from "react";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => onHandleCheckedTodo(data)}>
        
      </button>
      <button className="delete-btn" onClick={() => onHandleDeleteTodo(data)}>
        
      </button>
    </li>
  );
};
