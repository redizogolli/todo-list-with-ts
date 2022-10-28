export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export type TodoContextType = {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
};

export enum TodoActionType {
  None,
  ADD_TODO = "ADD_TODO",
  Edit_TODO = "Edit_TODO",
}
