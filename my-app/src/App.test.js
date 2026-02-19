import { render, screen } from '@testing-library/react';
import App from './App';

// testing text content even if you change the text content in App.js, the test will not fail because we are using data-testid to select the element
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement).toBeInTheDocument();
});


// testing URL even if you change the URL in App.js, the test will fail because we are checking the href attribute of the link element
test('url is correct', () => {
  render(<App />);
  const linkElement = screen.getByTestId('learn-link');
  expect(linkElement.href).toContain('https://reactjs.org');
});