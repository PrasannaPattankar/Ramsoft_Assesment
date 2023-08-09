import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskList from './TaskList';

describe('TaskList', () => {
  test('renders task list', () => {
    const tasks = [
      { name: 'Task 1', deadline: '2023-09-30', status: 'Defined' },
      { name: 'Task 2', deadline: '2023-10-15', status: 'In Progress' },
    ];

    render(<TaskList tasks={tasks} onDelete={() => {}} showActions={true} />);

    const task1Name = screen.getByText('Task 1');
    const task2Name = screen.getByText('Task 2');

    expect(task1Name).toBeInTheDocument();
    expect(task2Name).toBeInTheDocument();
  });
});
