import React from 'react';

import { render, screen } from '@testing-library/react';
import App from './App';

// https://github.com/facebook/jest/issues/9538
// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Calvin Hawkins/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
