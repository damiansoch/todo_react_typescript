import React from "react";
import { Todo } from "../model";
import { FaRegEdit } from "react-icons/fa";
import { TiDocumentDelete } from "react-icons/ti";
import { MdOutlineDoneAll } from "react-icons/md";
import "./styles.css";

const SingleTodo: React.FC<SingleTodoProps> = ({
  todo,
  todos,
  setTodos,
}: SingleTodoProps) => {
  return (
    <form className="todos__single">
      <span className="todos__single--text">{todo.todo}</span>
      <div>
        <span className="icon">
          <FaRegEdit />
        </span>
        <span className="icon">
          <TiDocumentDelete />
        </span>
        <span className="icon">
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
