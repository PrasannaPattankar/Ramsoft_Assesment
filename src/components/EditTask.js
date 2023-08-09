import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

/* edit task functionality */
function Edittask({ task, onSave }) {
  const [editedTask, setEditedTask] = useState(task);
  /* Title: handle input change , here we are dealing with inout fields edit  */

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  };
/* Title: handle input change , here we are dealing with submit inout fields edit  */
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedTask);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Task Name"
        name="name"
        value={editedTask.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label="Description"
        name="description"
        value={editedTask.description}
        onChange={handleInputChange}
        multiline
        rows={4}
      />
      <TextField
        label="Deadline"
        name="deadline"
        type="date"
        value={editedTask.deadline}
        onChange={handleInputChange}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Save Changes
      </Button>
    </form>
  );
}

export default Edittask;
