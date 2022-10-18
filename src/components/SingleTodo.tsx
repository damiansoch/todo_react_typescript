import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { FaRegEdit } from "react-icons/fa";
import { TiDocumentDelete } from "react-icons/ti";
import { MdOutlineDoneAll } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  //focusing on input after edit clicker... need to add ref in input as well
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  //---
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          className="todos__single--text"
          onChange={(e) => {
            setEditTodo(e.currentTarget.value);
          }}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <FaRegEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <TiDocumentDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdOutlineDoneAll />
        </span>
      </div>
    </form>
  );
};
interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default SingleTodo;
