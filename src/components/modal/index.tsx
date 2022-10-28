import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Box,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import { ITodo, TodoActionType } from "../../types";

interface ModalProps {
  todo: ITodo;
  type: TodoActionType;
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ITodo) => void;
}

const Popup = ({ todo, title, isOpen, type, onClose, onSave }: ModalProps) => {
  const [data, setData] = useState(todo);

  const isError = data.title === "";

  const handleSave = () => {
    onSave(data);
  };

  const handleClose = () => {
    setData(todo);
    onClose();
  };

  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <FormControl isInvalid={isError}>
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                value={data.title}
                onChange={(e: any) =>
                  setData({ ...data, title: e.target.value })
                }
              />
              {isError && (
                <FormErrorMessage>Title is required.</FormErrorMessage>
              )}
            </FormControl>
            {type === TodoActionType.Edit_TODO && (
              <FormControl>
                <FormLabel>Completed</FormLabel>
                <Checkbox
                  isChecked={data.completed}
                  onChange={(e: any) =>
                    setData({ ...data, completed: e.target.checked })
                  }
                />
              </FormControl>
            )}
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleClose}>
            Close
          </Button>
          <Button colorScheme="green" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Popup;
