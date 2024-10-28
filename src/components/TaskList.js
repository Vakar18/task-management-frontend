// src/components/TaskList.js
import React from 'react';
import { Box, Card, CardContent, CardActions, Button, Typography } from '@mui/material';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  return (
    <Box className="task-list" sx={{ marginTop: 4 }}>
      <Typography variant="h6" sx={{ color: 'secondary.main', marginBottom: 2 }}>
        Task List
      </Typography>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Card
            key={task._id}
            sx={{
              marginBottom: 2,
              backgroundColor: 'background.paper',
              borderRadius: 2,
              transition: 'transform 0.2s',
              '&:hover': { transform: 'scale(1.02)', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' },
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div" color="secondary" sx={{ marginBottom: 1 }}>
                {task.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {task.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button size="small" color="secondary" onClick={() => onEdit(task)}>
                Edit
              </Button>
              <Button size="small" color="secondary" onClick={() => onDelete(task._id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography variant="body1" color="text.secondary">
          No tasks available
        </Typography>
      )}
    </Box>
  );
};

export default TaskList;
