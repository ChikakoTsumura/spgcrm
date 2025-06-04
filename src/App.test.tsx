import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders customer forms', () => {
  render(<App />);
  expect(screen.getByText('顧客一覧')).toBeInTheDocument();
  expect(screen.getByText('新規顧客登録')).toBeInTheDocument();
  expect(screen.getByText('顧客情報更新')).toBeInTheDocument();
});
