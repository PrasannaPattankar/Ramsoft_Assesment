import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('App', () => {
  test('renders app bar and home page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const appBar = screen.getByRole('banner');
    const homePageTitle = screen.getByText('Task Management App');

    expect(appBar).toBeInTheDocument();
    expect(homePageTitle).toBeInTheDocument();
  });

  test('navigates to create task form', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const createTaskLink = screen.getByText('Create New Task');
    fireEvent.click(createTaskLink);

    const createTaskTitle = screen.getByText('Create New Task');
    expect(createTaskTitle).toBeInTheDocument();
  });

  test('navigates to dashboard', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const dashboardLink = screen.getByText('Dashboard');
    fireEvent.click(dashboardLink);

    const dashboardTitle = screen.getByText('Dashboard');
    expect(dashboardTitle).toBeInTheDocument();
  });
});
