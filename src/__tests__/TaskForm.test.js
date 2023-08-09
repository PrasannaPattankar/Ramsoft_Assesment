import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TaskForm from './TaskForm';

describe('TaskForm', () => {
  test('renders task form fields', () => {
    render(<TaskForm onSubmit={() => {}} />);

    const nameInput = screen.getByLabelText('Task Name');
    const descriptionInput = screen.getByLabelText('Description');
    const deadlineInput = screen.getByLabelText('Deadline');
    const statusInput = screen.getByLabelText('Status');
    const saveButton = screen.getByRole('button', { name: /save task/i });

    expect(nameInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(deadlineInput).toBeInTheDocument();
    expect(statusInput).toBeInTheDocument();
    expect(saveButton).toBeInTheDocument();
  });

  test('submits form with task data', () => {
    const mockOnSubmit = jest.fn();
    render(<TaskForm onSubmit={mockOnSubmit} />);

    const nameInput = screen.getByLabelText('Task Name');
    const descriptionInput = screen.getByLabelText('Description');
    const deadlineInput = screen.getByLabelText('Deadline');
    const statusInput = screen.getByLabelText('Status');
    const saveButton = screen.getByRole('button', { name: /save task/i });

    fireEvent.change(nameInput, { target: { value: 'Sample Task' } });
    fireEvent.change(descriptionInput, { target: { value: 'Sample Description' } });
    fireEvent.change(deadlineInput, { target: { value: '2023-12-31' } });
    fireEvent.change(statusInput, { target: { value: 'In Progress' } });
    fireEvent.click(saveButton);

    expect(mockOnSubmit).toHaveBeenCalledWith({
      name: 'Sample Task',
      description: 'Sample Description',
      deadline: '2023-12-31',
      status: 'In Progress',
    });
  });
});
