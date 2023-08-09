import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', // Adjust this value for spacing
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px', // Adjust this value for padding
    border: '1px solid #ccc', // Add border for better visibility
    borderRadius: '5px', // Add border radius
  },
  button: {
    marginTop: '16px', // Adjust this value for spacing
  },
}));
 /* Title: TaskForm Function
 Description: It will create Tasks and it includes Task name , Description , Date and Status
 
 */

function TaskForm({ onSubmit }) {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('Defined');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  /* 
  Description: Handlesubmit 
  Once we submit the task it will handle bame , description, status
  */

  const handleSubmit = (e) => {
    e.preventDefault();

    const task = { name, description, deadline, status };
    onSubmit(task);
    setShowSuccessMessage(true);

    // Reset form fields
    setName('');
    setDescription('');
    setDeadline('');
    setStatus('Defined');
  };
  /* show success message once task is submitted */

  const handleCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
  };

  /* it return the react element */
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <TextField label="Task Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} multiline rows={4} />
      <TextField
        label="Deadline"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        InputLabelProps={{ shrink: true }}
        required
      />
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <MenuItem value="Defined">Defined</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" className={classes.button}>
        Save Task
      </Button>
      <Snackbar open={showSuccessMessage} autoHideDuration={3000} onClose={handleCloseSuccessMessage}>
        <MuiAlert elevation={6} variant="filled" onClose={handleCloseSuccessMessage} severity="success">
          Task saved successfully!
        </MuiAlert>
      </Snackbar>
    </form>
  );
}

export default TaskForm;
