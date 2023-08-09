import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import EditTask from './EditTask'; // You need to have EditTask component

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from JSON or use an API call
    fetch('/tasks.json')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleCreateTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleEditTask = (editedTask, taskId) => {
    const newTasks = [...tasks];
    newTasks[taskId] = editedTask;
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Router>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Task Management App
            </Link>
          </Typography>
          <div>
            <Link to="/create" style={{ color: 'white', textDecoration: 'none', marginRight: '16px' }}>
              Create New Task
            </Link>
            <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>
              Dashboard
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container>
        <Switch>
          <Route exact path="/">
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
          </Route>
          <Route path="/create">
            <TaskForm onSubmit={handleCreateTask} />
          </Route>
          <Route path="/edit/:id">
            <EditTask tasks={tasks} onEdit={handleEditTask} />
          </Route>
          <Route path="/dashboard">
            <TaskList tasks={tasks} onDelete={handleDeleteTask} showActions={true} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
