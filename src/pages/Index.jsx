import { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, List, ListItem, ListIcon, Heading } from "@chakra-ui/react";
import { FaCheckCircle, FaRocket } from "react-icons/fa";

const Index = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleAddTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl" mb={4}>
          AI-Powered Application Development Platform
        </Heading>
        <Text fontSize="lg">Enter your natural language instructions below:</Text>
        <Input placeholder="Describe your task..." value={input} onChange={handleInputChange} />
        <Button leftIcon={<FaRocket />} colorScheme="teal" onClick={handleAddTask}>
          Add Task
        </Button>
        <Box width="100%">
          <Heading as="h2" size="md" mt={6} mb={4}>
            Interpreted Tasks:
          </Heading>
          <List spacing={3}>
            {tasks.map((task, index) => (
              <ListItem key={index}>
                <ListIcon as={FaCheckCircle} color="green.500" />
                {task}
              </ListItem>
            ))}
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
