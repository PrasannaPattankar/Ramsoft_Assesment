import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

/*Dashboard page here we do display all the tasks and it consists of edit functionality and elete functionality  */
function Dashboard() {
  const [tasks, setTasks] = useState([]);

  /* Title: add tasks */
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
/* Title: edit functionlity method  */
  const editTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  /* Title: delete functionality code */
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Task Dashboard
      </Typography>
      <TaskForm onSubmit={addTask} />
      {tasks.length > 0 && (
        <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
      )}
    </Container>
  );
}

export default Dashboard;
