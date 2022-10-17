import React, { useRef } from "react";
import "./styles.css";

const InputField: React.FC<InputFieldProps> = ({
  todo,
  setTodo,
  handleAdd,
}: InputFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input_box"
        value={todo}
        onChange={(e) => setTodo(e.currentTarget.value)}
      />
      <button type="submit" className="button_submit">
        Go
      </button>
    </form>
  );
};
interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}
export default InputField;
