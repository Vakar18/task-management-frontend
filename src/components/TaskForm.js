// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

const TaskForm = ({ onSave, taskToEdit }) => {
  const [task, setTask] = useState({ title: '', description: '' });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(task);
    setTask({ title: '', description: '' });
  };

  return (
    <Paper className="form-container" elevation={3} sx={{ padding: 3, marginBottom: 4, backgroundColor: 'background.paper',marginTop:4 }}>
      <Typography variant="h6" sx={{ marginBottom: 2, color: 'text.secondary' }}>
        {taskToEdit ? 'Edit Task' : 'Add New Task'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
          variant="filled"
          InputProps={{ sx: { color: 'white' } }}
          sx={{
            input: { color: 'text.primary' },
            '.MuiFilledInput-root': { backgroundColor: 'background.default' },
          }}
        />
        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          required
          variant="filled"
          multiline
          rows={3}
          sx={{
            input: { color: 'text.primary' },
            '.MuiFilledInput-root': { backgroundColor: 'background.default' },
          }}
        />
        <Button type="submit" variant="contained" color="secondary" fullWidth>
          {taskToEdit ? 'Update Task' : 'Add Task'}
        </Button>
      </Box>
    </Paper>
  );
};

export default TaskForm;
