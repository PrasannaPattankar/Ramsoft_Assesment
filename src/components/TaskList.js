import React from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Button } from '@mui/material';

/* Title: Tasklist , we are displaying here list of tasks which are performed in create tasks  */
function TaskList({ tasks, onDelete, onEdit }) {
  return (
    <div>
      <h2>Task List</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Deadline</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.deadline}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" onClick={() => onEdit(index)}>Edit</Button>
                  <Button variant="outlined" color="error" onClick={() => onDelete(index)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TaskList;
