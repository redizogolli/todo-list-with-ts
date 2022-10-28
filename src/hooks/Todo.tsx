import { useContext } from "react";
import { ITodo } from "../types";
import { v4 as uuidv4 } from "uuid";
import TodoContext from "../context";

//hook that returns the todo list
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  const { todos, setTodos } = context;

  const addTodo = (title: string) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  //edit
  const editTodo = (editedTodo: ITodo) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === editedTodo.id) {
        todo.title = editedTodo.title;
        todo.completed = editedTodo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  //delete
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return { todos, addTodo, editTodo, deleteTodo };
};
