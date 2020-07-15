import React from 'react';
import ReactDOM from 'react-dom';
import { Route , BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from "./App";

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
