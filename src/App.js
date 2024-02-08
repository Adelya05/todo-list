import {
  Button,
  Container,
  Text,
  Title,
  Modal,
  TextInput,
  Group,
  Card,
  ActionIcon,
} from "@mantine/core";
import React, {useState } from "react";
import { MoonStars, Sun, Trash  } from "tabler-icons-react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";


function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskSummary, setNewTaskSummary] = useState("");

  const handleCreateTask = () => {
    if (newTaskSummary.trim() !== "") {
      const newTask = {
        id: tasks.length +1,
        summary: newTaskSummary,
      };
      setTasks([...tasks, newTask]);
      setNewTaskSummary("");
    }
  };

  return (
    <ColorSchemeProvider ColorScheme="" toggleColorScheme={() => {}}>
    <MantineProvider theme={{colorScheme: "", defultRadius:"md"}}>
      <div className="App">
        <Modal opened={true} 
        size="md"
        title="New Task"
        // withCloseButton={false}
        // onClose={false}
        centered>
          <TextInput mt={'md'} placeholder="Task Summary" label="Summary" value={newTaskSummary}
              onChange={(event) => setNewTaskSummary(event.target.value)}/>
              
           <Group mt={"md"} position="apart">
            <Button variant="subtle" >Cancel</Button>
            <Button onClick={handleCreateTask} >Creat task</Button>
           </Group>
        </Modal>
        <Container size={550} my={40}>
          <Group position="apart">
            <Title sx={theme => ({
              fontFamily:`Greycliff CF, ${theme.fontFamily}`,
              fontWeight:900,
            })}>My Task</Title>
            <ActionIcon color="blue" size="lg" >
            <Sun size={16}/>
            </ActionIcon>
          </Group>

          {tasks.map((task) => (
             <Card withBorder mt={"sm"}  key={task.id}>
             <Group position="apart">
               <Text weight="bold">{task.summary}</Text>
               <ActionIcon color='red' variant="transparent">
                 <Trash/>
               </ActionIcon>
               <Text color="dimmed" size="md" mt="sm">No summary was provaider for this task</Text>
             </Group>
           </Card>
          ))}
         
        </Container>
      </div>
    </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
