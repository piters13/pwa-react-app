import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

test('renders about link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
