import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter, Route } from 'react-router-dom';
import EditTask from './EditTask';

describe('EditTask', () => {
  test('renders and submits edited task', () => {
    const mockTasks = [
      { name: 'Task 1', description: 'Description 1', deadline: '2023-09-30', status: 'Defined' },
    ];
    const mockOnEdit = jest.fn();
    render(
      <MemoryRouter initialEntries={['/edit/0']}>
        <Route path="/edit/:id">
          <EditTask tasks={mockTasks} onEdit={mockOnEdit} />
        </Route>
      </MemoryRouter>
    );

    const nameInput = screen.getByLabelText('Task Name');
    const descriptionInput = screen.getByLabelText('Description');
    const deadlineInput = screen.getByLabelText('Deadline');
    const statusInput = screen.getByLabelText('Status');
    const saveButton = screen.getByRole('button', { name: /save task/i });

    fireEvent.change(nameInput, { target: { value: 'Edited Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'Edited Description' } });
    fireEvent.change(deadlineInput, { target: { value: '2023-12-31' } });
    fireEvent.change(statusInput, { target: { value: 'In Progress' } });
    fireEvent.click(saveButton);

    expect(mockOnEdit).toHaveBeenCalledWith(
      {
        name: 'Edited Task',
        description: 'Edited Description',
        deadline: '2023-12-31',
        status: 'In Progress',
      },
      0
    );
  });
});
