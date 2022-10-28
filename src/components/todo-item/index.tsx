import { Box, HStack, Text, Checkbox, IconButton } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useTodo } from "../../hooks/Todo";
import { ITodo } from "../../types";

const TodoItem = ({
  todo,
  editClicked,
}: {
  todo: ITodo;
  editClicked(todo: ITodo): void;
}) => {
  const { editTodo, deleteTodo } = useTodo();
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    editTodo({ ...todo, completed: e.target.checked });
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  return (
    <Box h="full" w="full" px={4} py={2}>
      <HStack h="full" w="full" justifyContent="space-between">
        <HStack w="full" h="full" spacing={2}>
          <Checkbox
            isChecked={todo.completed}
            onChange={(e) => handleCheckboxChange(e)}
          />
          <Text as={todo.completed ? "s" : "b"}>{todo.title}</Text>
        </HStack>
        <HStack spacing={2}>
          <IconButton
            colorScheme="yellow"
            aria-label="Edit"
            icon={<EditIcon />}
            onClick={() => editClicked(todo)}
          />
          <IconButton
            colorScheme="red"
            aria-label="Delete"
            icon={<DeleteIcon />}
            onClick={handleDelete}
          />
        </HStack>
      </HStack>
    </Box>
  );
};

export default TodoItem;
