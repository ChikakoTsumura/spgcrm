import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render customer list title', () => {
  render(<App />);
  const heading = screen.getByText(/顧客一覧/);
  expect(heading).toBeInTheDocument();
});
