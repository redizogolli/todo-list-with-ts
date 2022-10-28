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
  const { todos, addTodo } = useTodo();
  const [isOpen, setIsOpen] = useState(false);
  const bgColor = useColorModeValue("gray.100", "gray.700");
  const todo: ITodo = {
    id: "",
    title: "",
    completed: false,
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
      <Popup
        todo={todo}
        type={TodoActionType.ADD_TODO}
        title="Add Todo"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={(data: ITodo) => {
          addTodo(data.title);
          setIsOpen(false);
        }}
      />
      {/* Call popup */}
      <HStack h="full" w="full" justifyContent={"space-between"} px={4} py={2}>
        <Heading>Todo List</Heading>
        <IconButton
          colorScheme={"green"}
          aria-label="add"
          icon={<AddIcon />}
          onClick={() => setIsOpen(true)}
        ></IconButton>
      </HStack>
      <VStack w="full" h="full">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </VStack>
    </Box>
  );
};

export default TodoList;
