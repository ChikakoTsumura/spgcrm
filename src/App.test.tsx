import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders menu and customer list', () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: '顧客一覧' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: '新規顧客登録' })).toBeInTheDocument();
});
