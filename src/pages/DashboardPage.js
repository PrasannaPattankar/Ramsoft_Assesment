import React from 'react';
import Dashboard from '../components/Dashboard';

function DashboardPage({ tasks, onDelete }) {
  return (
    <Dashboard tasks={tasks} onDelete={onDelete} />
  );
}

export default DashboardPage;
