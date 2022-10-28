import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Heading,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useTodo } from "../../hooks/Todo";
import TodoItem from "../todo-item";
import Popup from "../modal";
import { ITodo, TodoActionType } from "../../types";

const TodoList = () => {
  const [type, setType] = useState<TodoActionType>(TodoActionType.None);
  const { todos, addTodo, editTodo } = useTodo();
  const [isOpen, setIsOpen] = useState(false);

  const [todo, setTodo] = useState<ITodo>({
    id: "",
    title: "",
    completed: false,
  });

  const bgColor = useColorModeValue("gray.100", "gray.700");
  const handleEditClicked = (todo: ITodo) => {
    setType(TodoActionType.Edit_TODO);
    setTodo(todo);
    setIsOpen(true);
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gap={4}
      minW="500px"
      background={bgColor}
    >
      {isOpen && (
        <Popup
          todo={todo}
          type={type}
          title={type === TodoActionType.ADD_TODO ? "Add Todo" : "Edit Todo"}
          isOpen={isOpen}
          onClose={() => {
            setType(TodoActionType.None);
            setIsOpen(false);
          }}
          onSave={(data: ITodo) => {
            if (type === TodoActionType.ADD_TODO) {
              addTodo(data.title);
            } else {
              editTodo(data);
            }
            setType(TodoActionType.None);
            setIsOpen(false);
          }}
        />
      )}
      <HStack h="full" w="full" justifyContent={"space-between"} px={4} py={2}>
        <Heading>Todo List</Heading>
        <IconButton
          colorScheme={"green"}
          aria-label="add"
          icon={<AddIcon />}
          onClick={() => {
            setType(TodoActionType.ADD_TODO);
            setTodo({
              id: "",
              title: "",
              completed: false,
            });
            setIsOpen(true);
          }}
        ></IconButton>
      </HStack>
      <VStack w="full" h="full">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} editClicked={handleEditClicked} />
        ))}
      </VStack>
    </Box>
  );
};

export default TodoList;
