import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn testing/i);
  expect(linkElement).toBeInTheDocument();
});

test('Check for four list items', () => {
  render(<App />);
  const linkElement = screen.getAllByRole('listitem');
  expect(linkElement).toHaveLength(4)
})

test('Check for Heading H1', () => {
  render(<App />)
  const linkEle = screen.queryByTestId('test_id_1');
  expect(linkEle).toBeInTheDocument();
})
// test suite -> no of files or components
// tests -> no of test functions

// test('', () => {})