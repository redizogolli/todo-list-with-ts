import { ChakraProvider, Grid, GridItem, theme } from "@chakra-ui/react";
import { TodoList } from "./components";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { TodoProvider } from "./context";

export const App = () => (
  <ChakraProvider theme={theme}>
    <TodoProvider>
      <Grid w="full" h="full" templateRows={"auto 1fr"}>
        <GridItem rowStart={1} display="flex" justifyContent={"end"}>
          <ColorModeSwitcher />
        </GridItem>
        <GridItem rowStart={2} display="flex" justifyContent={"center"}>
          <TodoList />
        </GridItem>
      </Grid>
    </TodoProvider>
  </ChakraProvider>
);
