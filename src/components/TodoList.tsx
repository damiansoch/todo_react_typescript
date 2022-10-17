import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
import "./styles.css";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  setTodos,
}: TodoListProps) => {
  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <>
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        </>
      ))}
    </div>
  );
};
interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
export default TodoList;
