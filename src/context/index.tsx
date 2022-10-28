import React, { createContext, useState } from "react";
import { ITodo, TodoContextType } from "../types";
import { v4 as uuidv4 } from "uuid";

// react context to share state between components
const TodoContext = createContext<TodoContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export const TodoProvider : React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      id: uuidv4(),
      title: "Learn React",
      completed: true,
    },
    {
      id: uuidv4(),
      title: "Learn Chakra",
      completed: false,
    },
    {
      id: uuidv4(),
      title: "Learn TypeScript",
      completed: false,
    },
  ]);
  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
