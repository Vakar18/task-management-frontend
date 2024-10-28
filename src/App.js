import React, { useEffect, useState } from 'react';
import { ThemeProvider, CssBaseline, Container } from '@mui/material';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import api from './api';
import theme from './theme';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get('/tasks');
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const response = await api.post('/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (updatedTask) => {
    await api.put(`/tasks/${updatedTask._id}`, updatedTask);
    setTasks(tasks.map((task) => (task._id === updatedTask._id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <TaskForm onSave={taskToEdit ? updateTask : addTask} taskToEdit={taskToEdit} />
        <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={deleteTask} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
